import React from "react";

import Result from "./Result";

//get all the results based on search
function Results({ results, getDetails }) {
  return (
    <section className="results">
      {results.map((result) => (
        <Result key={result.id} result={result} getDetails={getDetails} />
      ))}
    </section>
  );
}

export default Results;
