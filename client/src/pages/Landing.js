import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import NewReviews from "../components/NewReviews";
import FrontPageBeers from "../components/FrontPageBeers";
import About from "../components/About";





function Landing(props) {
  return (
    <div>
      <Jumbotron />
      <NewReviews />
      <FrontPageBeers />
      <About />
    </div>
  );
}

export default Landing;
