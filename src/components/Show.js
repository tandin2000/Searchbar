import React from "react";

const Show = (props) => {
  const { results, info } = props;
  return (
    <div className="show">
      <div className="show__info">
        {info ? `Total results: ${info}` : ""}
      </div>
      {results.length > 0
        ? results.map((result) => (
            <div className="show__details">
              <div className="show__title">
                <a href={result.link}>{result.title}</a>
              </div>
              <div className="show__description">
                <p>{result.body}</p>
              </div>
            </div>
          

          ))
        : ""}
    </div>
  );
};

export default Show;
