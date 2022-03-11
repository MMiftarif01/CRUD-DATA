import React, { useState } from "react";

import CardList from "./component/CardList";

import SearchBar from "./component/SearchBar";

import MovieSource from "./api/MovieSource";

function App() {
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "e8cd4a56" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  // http://www.omdbapi.com/?i=tt3896198&apikey=e8cd4a56

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          React website movie
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default App;
