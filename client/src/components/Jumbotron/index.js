import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 320, clear: "both", textAlign: "center", marginTop: 58, marginBottom: 0, borderRadius: 0, backgroundColor: "#ff6961" }}
      className="jumbotron"
    >
      {children}
      <h1 style={{ color: "white", paddingTop: 35 }}><b>Welcome to Cap Collector!</b></h1>
      <h4>Discover - Drink - Review - Collect</h4>
    </div>
  );
}

export default Jumbotron;
