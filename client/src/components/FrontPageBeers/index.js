import React from "react";
import { Container, Row, Col } from 'reactstrap';
// import BeerApi from "./beersHelper.js";

class FrontPageBeers extends React.Component {
  state = {
    beerArray: [],
  }
  
  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/beers/?key=9187ee928d7e9191b4fd7a090a344578')
    .then(response => response.json())
    .then(data => {
      this.setState({
        beerArray: data.data,
      })
    })
  }
  
  // showBeers = () => {
  //   this.state.beerArray.forEach(
  //     obj => 
  //     <div>{obj.name}</div>
  //   )
  // }

  beerLabel = (beer) => {
    if (!beer.labels || !beer.labels.medium) {
      return "https://images.pexels.com/photos/105017/pexels-photo-105017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      // return "../assets/bottle.jpg"
    }
    return beer.labels.medium;
  }

  beerStyle = (beer) => {
    if (!beer.style || !beer.style.shortName) {
      return "";
    }
    return beer.style.shortName;
  }

  beerObject = (beer) => {
    if (beer) {
      return <div>
        <img src={this.beerLabel(beer)} alt="beer" style={{ height: 150, width: 150, paddingBottom: 20 }} /> <br/>
        <b>{beer.name}</b> <br/>
        <i>{this.beerStyle(beer)}</i>
      </div>
    }
  }

  render() {
    // generate random numbers for beers index
    let indexArr = [];
    while(indexArr.length < 5){
        let r = Math.floor(Math.random() * 50) + 1;
        if (indexArr.indexOf(r) === -1) indexArr.push(r);
    }    
    
    // return beers
    return(
    <div style={{ paddingTop: 50, paddingBottom: 50, textAlign: "center" }}>
      <Container style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1 style={{ color: "#ff6961", paddingBottom: 20 }}><b>Beers</b></h1>
        <Row style={{ textAlign: "center" }}>
          <Col> {this.beerObject(this.state.beerArray[indexArr[0]])} </Col>
          <Col> {this.beerObject(this.state.beerArray[indexArr[1]])} </Col>
          <Col> {this.beerObject(this.state.beerArray[indexArr[2]])} </Col>
          <Col> {this.beerObject(this.state.beerArray[indexArr[3]])} </Col>
          <Col> {this.beerObject(this.state.beerArray[indexArr[4]])} </Col>
        </Row>
      </Container>
    </div>
    )
  }
}

export default FrontPageBeers;