import React, { Component } from "react";
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CardDetail from "../components/Card";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: "" };
  }
  beerDetail(id) {
    const result = this.props.results.find(beer => {
      return beer.id === id;
    });
    this.setState({ beer: result });
  }

  closeDetail = () => {
    this.setState ({ beer: "" })
  }

  render() {
    return (
      <div style={{ marginTop: 120, marginLeft: 20, marginRight: 20, marginBottom: 50 }}>
        <Row>
        {this.props.results.length > 0 && !this.state.beer
          ? this.props.results.map(beer => {
              return (
                <Col lg="3" sm="6" onClick={() => this.beerDetail(beer.id)} >
                  <Card style={{ marginBottom: 10 }}>
                    <CardBody>
                      <CardImg top width="100%" src={ beer.labels && beer.labels.medium 
                        ? beer.labels.medium 
                        : 'https://images.pexels.com/photos/105017/pexels-photo-105017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} 
                        alt="Card image cap" style={{ objectFit: "cover", width: 200, textAlign: "center" }} />
                      <CardTitle style={{ color: "#ff6961", fontSize: 20, marginTop: 10 }}>{beer.name}</CardTitle>
                      <CardText style={{ fontWeight: 200, marginTop: 5 }}>{beer.style.shortName}</CardText>
                      <CardText style={{ fontWeight: 200, marginTop: 1 }}>ABV: {beer.abv}</CardText>
                      <CardText style={{ fontWeight: 200, marginTop: 1 }}>Availability: { beer.available 
                        ? beer.available.name 
                        : "Unknown" }</CardText>
                    </CardBody>
                  </Card>
                </Col>
              );
            })
          : ""}

        {this.state.beer ? (
          <CardDetail onClose={ this.closeDetail } theBeer={ this.state.beer } />
        ) : (
          ""
        )}
        </Row>
      </div>
    );
  }
}

export default SearchResults;
