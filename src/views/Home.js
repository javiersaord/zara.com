import React from "react";
import ReactDOM from 'react-dom/client';


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
      <h1 className="main-title"> Podcaster </h1>
      {items.feed.entry.map((item) => (
        <div key={item.id.attributes['im:id']} className="layoutPodcast">
          <div className="layoutImage"><img src={item['im:image'][1].label} alt="iTunes"/></div>
          <div className="layoutName">{item['im:name'].label}</div>
          <div className="layoutAuthor">Author: {item['im:artist'].label}</div>
        </div>

        ))}
      </div>
    );
}
  
} 

export default Home