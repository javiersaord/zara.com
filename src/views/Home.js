import React from "react";
import { Link  } from "react-router-dom";



class Home extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        items: [],
        DataisLoaded: false
      };
  } 

  componentDidMount() {

    fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json").then((res) => res.json()).then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true
    });
  })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    
    if (!DataisLoaded) return <div>
      <h1> Pleases wait some time.... </h1> </div> ;
    return (
      <div className = "App">
      <h1 className="main-title"> <Link to="/">Podcaster</Link> </h1>
      {items.feed.entry.map((item) => (
        <Link to={`/podcast/${item.id.attributes['im:id']}` } key={item.id.attributes['im:id']} state={
                item.id.attributes['im:id']}>
        <div className="layoutPodcast">
          <div className="layoutImage"><img src={item['im:image'][1].label} alt="iTunes"/></div>
          <div className="layoutName">{item['im:name'].label}</div>
          <div className="layoutAuthor">Author: {item['im:artist'].label}</div>
        </div>
        </Link>
        
        ))}
        
      </div>
    );
}
  
} 

export default Home