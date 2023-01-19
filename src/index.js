import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home.js";
import Details from "./views/Details.js";
import Episode from "./views/Episode.js";
import ReactDOM from 'react-dom/client';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:id" element={<Details />} />
          <Route path="/podcast/:id/episode/:episodeId" element={<Episode />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);