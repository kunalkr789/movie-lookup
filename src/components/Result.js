import React from "react";

function Result({ result, getDetails }) {
  return (
    <div className="result" onClick={() => getDetails(result.id)}>
      <div className="left">
        <div>
          <img
            className="image"
            src={"https://image.tmdb.org/t/p/w500/" + result.poster_path}
          />
        </div>
      </div>
      <div className="right">
        <h4 className="card-title">{result.title}</h4>
        <h5>
          Rating: <small className="card-text">{result.vote_average}</small>
        </h5>
        <h5>
          Released On: <small>{result.release_date}</small>
        </h5>
      </div>
    </div>
  );
}

export default Result;
