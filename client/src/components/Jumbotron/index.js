import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundImage: `url("https://images.pexels.com/photos/632651/pexels-photo-632651.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")`, color: "white", backgroundSize: "1500px",
        height: 400, clear: "both", marginTop: 55, marginBottom: 0, borderRadius: 0, backgroundColor: "#ff6961" }}
      className="jumbotron"
    >
      {children}
      <h1 style={{ paddingTop: 50 }}><b><span style={{ fontSize: 40 }}>CAP COLLECTOR</span></b></h1>
      <h4 style={{ paddingTop: 20 }}>DISCOVER - DRINK - SHARE - COLLECT</h4>
    </div>
  );
}

export default Jumbotron;
