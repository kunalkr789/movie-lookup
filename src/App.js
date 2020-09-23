import React, { useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";
import Details from "./components/Details";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl =
    "https://api.themoviedb.org/3/search/movie?api_key=2b07481e20eb126de9fc9be86b2f5283";

  //function to search any movie
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&query=" + state.s).then(({ data }) => {
        console.log(apiurl + "&query=" + state.s);
        console.log(data);
        let results = data.results;
        console.log(results);
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  //to open details page for any movie
  const getDetails = (id) => {
    axios(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=2b07481e20eb126de9fc9be86b2f5283"
    ).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closeDetails = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="container">
      <header class="header column">
        <Search handleInput={handleInput} search={search} />
      </header>
      <aside class="sidebar column">
        <Results results={state.results} getDetails={getDetails} />
      </aside>
      <main class="content column">
        {typeof state.selected.title != "undefined" ? (
          <Details selected={state.selected} closeDetails={closeDetails} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
