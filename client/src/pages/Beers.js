import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Beers extends Component {
  state = {
    beers: [],
    title: "",
    brewery: "",
    review: ""
  };

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = () => {
    API.getBeers()
      .then(res =>
        this.setState({ beers: res.data, title: "", brewery: "", review: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBeer = id => {
    API.deleteBeer(id)
      .then(res => this.loadBeers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.beer && this.state.brewery) {
      API.saveBeer({
        beer: this.state.beer,
        brewery: this.state.brewery,
        review: this.state.review
      })
        .then(res => this.loadBeers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Beer to review</h1>
              </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="beer"
                placeholder="beer (required)"
              />
              <Input
                value={this.state.brewery}
                onChange={this.handleInputChange}
                name="brewery"
                placeholder="brewery (optional)"
              />
              <TextArea
                value={this.state.review}
                onChange={this.handleInputChange}
                name="review"
                placeholder="review (required)"
              />
              <FormBtn
                disabled={!(this.state.brewery && this.state.beer)}
                onClick={this.handleFormSubmit}
              >
                Submit Review
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My top beers!</h1>
            </Jumbotron>
            { console.log(this.state.beers)}
            {this.state.beers && this.state.beers.length ? (
              <List>
                {this.state.beers.map(beer => (
                  <ListItem key={beer._id}>
                    <Link to={"/beers/" + beer._id}>
                      <strong>
                        {beer.title} by {beer.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBeer(beer._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Reviews to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Beers;
