import React from "react";

//to search movies
function Search({ handleInput, search }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
