import React from "react";

//for diaplaying the details of any movie
function Details({ selected, closeDetails }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.title} <span>({selected.release_date})</span>
        </h2>
        <p className="rating">Rating: {selected.vote_average}</p>
        <div className="plot">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + selected.poster_path}
          />
          <p>{selected.overview}</p>
        </div>
        <button className="close" onClick={closeDetails}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Details;
