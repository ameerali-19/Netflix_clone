import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,comedy,horror,romantic,documentary,animation,war} from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title = "Originals" />
      <RowPost url={action} title = "Action" isSmall />
      <RowPost url={comedy} title = "Comedy" isSmall />
      <RowPost url={horror} title = "Horror" isSmall />
      <RowPost url={romantic} title = "Romantic" isSmall />
      <RowPost url={documentary} title = "Documentaries" isSmall />
      <RowPost url={animation} title = "Animations" isSmall />
      <RowPost url={war} title = "War" isSmall />
    </div>
  );
}

export default App;
