import React, { Component } from "react";
import reviewAPI from "../utils/reviewAPI";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";


class NewReview extends Component {
  state = {
    username: "",
    date: Date.now,
    beerName: "",
    rating: 0,
    review: ""
  };

  componentDidMount(){ }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.beerName && this.state.review) {
      reviewAPI.saveReview({
        username: this.state.username,
        date: this.state.date,
        beerName: this.state.beerName,
        rating: this.state.rating,
        review: this.state.review
      })
        .then(res => {
          if(res.status === 200 ){
            return <Redirect to="/" />
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <h1 style={{ paddingTop: 70, paddingBottom: 15, color: "#ff6961" }}>Beer Review</h1>
        <Row>
          <Col size="12">
            <form className="newReviewForm">
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Your username"
              />
              <Input
                value={this.state.beerName}
                onChange={this.handleInputChange}
                name="beerName"
                placeholder="Name of the beer"
              />
              <Input
                value={this.state.rating}
                onChange={this.handleInputChange}
                name="rating"
                placeholder="Your Rating (1 worst, 10 best)"
              />
              <Input
                value={this.state.review}
                onChange={this.handleInputChange}
                name="review"
                placeholder="Your Review (no more than 144 characters)"
              />
              
              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Submit Your Review
              </FormBtn>
            </form>
          </Col>
          
        </Row>
        {/* redirect on authenticated */}
        {/* {this.props.authenticated ? <Redirect to='/'/> : <div></div>} */}

      </Container>
    );
  }
}

export default NewReview;
