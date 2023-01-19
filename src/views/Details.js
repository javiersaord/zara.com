import React from "react";
import { Link } from "react-router-dom";
import withRouter from '../withRouter';

class Details extends React.Component {
  
  constructor(props) {
      
      super(props);
      this.state = {
        items: [],
        DataisLoaded: false,
        
      };

      
  } 

  componentDidMount() {
    
    
      
     fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id='+this.props.params.id)}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => 
                      this.setState({
          items: data.contents,
          DataisLoaded: true
        }));
                    
             
  }
  
  render() {
    const { DataisLoaded, items } = this.state;
    let result=[];
    if (!DataisLoaded) return <div>
      <h1> Pleases wait some time.... </h1> </div> ;
    let arrApi=JSON.parse(items);
    for(var i in arrApi)
      result.push(Object.values(arrApi[i]));

    console.log(result);
    return (
      <div className = "App">
      <h1 className="main-title"> <Link to="/">Podcaster</Link> </h1>
        <div className='sidebar'>
          <img src={result[1][0].artworkUrl100} alt="episode"/>
        </div>
        <p className="dataApi">{result[1][0].artistName}</p>
        
      </div>
    );
  }
  
   
} 
export default withRouter(Details);

  