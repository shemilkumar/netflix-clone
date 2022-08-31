import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import urls from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <RowPost url={urls.originals} title="Netflix Originals" />
      <RowPost isSmall url={urls.trending} title="Trending Movies" />
      <RowPost isSmall url={urls.topRated} title="Top Rated Movies" />
      <RowPost isSmall url={urls.thriller} title="Thriller Movies" />
      <RowPost isSmall url={urls.anime} title="Animes" />
      <RowPost isSmall url={urls.comedy} title="Comedy Movies" />
      <RowPost isSmall url={urls.horror} title="Horror Movies" />
      <RowPost isSmall url={urls.mystery} title="Mystery Movies" />
    </div>
  );
}

export default App;
