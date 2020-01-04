import React from "react";

function FrontPageBeers({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "left" }}
      className="container"
    >
      {children}
      <h1>Beers</h1>
    </div>
  );
}

export default FrontPageBeers;
