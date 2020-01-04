import React from "react";

class FrontPageBeers extends React.Component {
  state = {
    beerArray: []
  }
  
  // apiCall = () => {
  //   fetch('https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/beers/?key=6d66b737226cdd5d6f16d4a6dff7f012').then(response => response.json()).then(data => console.log(data.data))
  // }
  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/beers/?key=6d66b737226cdd5d6f16d4a6dff7f012')
    .then(response => response.json())
    .then(data => {
      this.setState({
        beerArray: data.data
      })
    })
  }
  
  showBeers = () => {
    this.state.beerArray.forEach(
      obj => 
      <div>{obj.name}</div>
    )
  }

  render() {

    return(
      <div>
        <h1>Top Beers</h1>
        {this.state.beerArray[1] ? this.state.beerArray[1].name : ""} <br/>
        {this.state.beerArray[2] ? this.state.beerArray[2].name : ""} <br/>
        {this.state.beerArray[3] ? this.state.beerArray[3].name : ""} <br/>
        {this.state.beerArray[4] ? this.state.beerArray[4].name : ""} <br/>
        {this.state.beerArray[5] ? this.state.beerArray[5].name : ""}
      </div>
    )}
}

export default FrontPageBeers;