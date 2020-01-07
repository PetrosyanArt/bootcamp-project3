import React from "react";
import { Container, Row, Col } from 'reactstrap';
// import BeerApi from "./beersHelper.js";

class FrontPageBeers extends React.Component {
  state = {
    beerArray: [],
    test: []
  }
  
  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/beers/?key=9187ee928d7e9191b4fd7a090a344578')
    .then(response => response.json())
    .then(data => {
      this.setState({
        beerArray: data.data,
        test: data
      })
    })
  }
  
  // showBeers = () => {
  //   this.state.beerArray.forEach(
  //     obj => 
  //     <div>{obj.name}</div>
  //   )
  // }
  
  render() {
    return(
    <div style={{ paddingTop: 50, paddingBottom: 50 }}>
      <Container style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1 style={{ color: "#ff6961", paddingBottom: 20 }}><b>Beers</b></h1>
        <Row>
          <Col>
          {(() => {
              if (this.state.beerArray[1])
                return <div>
                  {this.state.beerArray[1].labels 
                    ? <img src={this.state.beerArray[1].labels.medium} style={{ height: 150, width: 150 }} /> 
                    : <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} style={{ height: 150, width: 150 }} />} <br />
                  {this.state.beerArray[1].name 
                    ? this.state.beerArray[1].name 
                    : "Sorry, name missing."} <br/>
                  {this.state.beerArray[1].style.shortName 
                    ? this.state.beerArray[1].style.shortName 
                    : "Sorry, style missing."}
                </div>
              else
                return <div>Beep boop, missing data.</div>
            })()
          }
          </Col>
          <Col>
          {(() => {
              if (this.state.beerArray[2])
                return <div>
                  {this.state.beerArray[2].labels 
                    ? <img src={this.state.beerArray[2].labels.medium} style={{ height: 150, width: 150 }} /> 
                    : <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} style={{ height: 150, width: 150 }} />} <br />
                  {this.state.beerArray[2].name 
                    ? this.state.beerArray[2].name 
                    : "Sorry, name missing."} <br/>
                  {this.state.beerArray[2].style.shortName 
                    ? this.state.beerArray[2].style.shortName 
                    : "Sorry, style missing."}
                </div>
              else
                return <div>Beep boop, missing data.</div>
            })()
          }          
          </Col>
          <Col>
          {(() => {
              if (this.state.beerArray[3])
                return <div>
                  {this.state.beerArray[3].labels 
                    ? <img src={this.state.beerArray[3].labels.medium} style={{ height: 150, width: 150 }} /> : <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} style={{ height: 150, width: 150 }} />} <br />
                  {this.state.beerArray[3].name ? this.state.beerArray[3].name : "Sorry, name missing."} <br/>
                  {this.state.beerArray[3].style.shortName ? this.state.beerArray[3].style.shortName : "Sorry, style missing."}
                </div>
              else
                return <div>Beep boop, missing data.</div>
            })()
          }          
          </Col>
          <Col>
          {(() => {
              if (this.state.beerArray[4])
                return <div>
                  {this.state.beerArray[4].labels ? <img src={this.state.beerArray[3].labels} style={{ height: 150, width: 150 }} /> : <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} style={{ height: 150, width: 150 }} />} <br />
                  {this.state.beerArray[4].name ? this.state.beerArray[4].name : "Sorry, name missing."} <br/>
                  {this.state.beerArray[4].style.shortName ? this.state.beerArray[4].style.shortName : "Sorry, style missing."}
                </div>
              else
                return <div>Beep boop, missing data.</div>
            })()
          }          
          </Col>          
          <Col>
          {(() => {
              if (this.state.beerArray[5])
                return <div>
                  {this.state.beerArray[5].labels ? <img src={this.state.beerArray[3].labels.medium} style={{ height: 150, width: 150 }} /> : <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} style={{ height: 150, width: 150 }} />} <br />
                  {this.state.beerArray[5].name ? this.state.beerArray[5].name : "Sorry, name missing."} <br/>
                  {this.state.beerArray[5].style.shortName ? this.state.beerArray[5].style.shortName : "Sorry, style missing."}
                </div>
              else
                return <div>Beep boop, missing data.</div>
            })()
          }          
          </Col>        
        </Row>
      </Container>
    </div>
    )
  }
}

export default FrontPageBeers;