import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';


let gitHubUrl='https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
function App() {
      const [userData, setUserData] = useState([]);

      useEffect(() => {
        getGitHubUserWithFetch();
      }, []);

     
      const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        setUserData(jsonData.feed);
        
      };

      
      return (
        <div className="App">
          <header className="App-header">
            <h2>Podcasts list</h2>
          </header>
          {
          	console.log(userData)
          	
          }
        </div>
      );
    }

    


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
