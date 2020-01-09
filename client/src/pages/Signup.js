import React, { Component } from "react";
import userAPI from "../utils/userAPI";
import {  Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";


class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordConf: "",
    age: "",
    favoriteBeer: "",
    favoriteBeerStyle: ""
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
    if (this.state.email && this.state.password) {
      userAPI.signup({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,
        age: this.state.age,
        favoriteBeer: this.state.favoriteBeer,
        favoriteBeerStyle: this.state.favoriteBeerStyle
      })
        .then(res => {
          console.log(res);
          if(res.status === 200 ){
            this.props.authenticate();
            return <Redirect to="/" />
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <h1 style={{ paddingTop: 70, paddingBottom: 15, color: "#ff6961" }}>Sign up today!</h1>
        <Row>
          <Col size="12">
 
            <form className="signUpForm">
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
                type="password"
              />
              <Input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name="passwordConf"
                placeholder="password confirmation (required)"
                type="password"
              />
              <Input
                value={this.state.age}
                onChange={this.handleInputChange}
                name="age"
                placeholder="age in years (required)"
              />
              <Input
                value={this.state.favoriteBeer}
                onChange={this.handleInputChange}
                name="favoriteBeer"
                placeholder="favorite beer"
              />
              <Input
                value={this.state.favoriteBeerStyle}
                onChange={this.handleInputChange}
                name="favoriteBeerStyle"
                placeholder="favorite style of beer"
              />
              
              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Sign Up
              </FormBtn>
            </form>
          </Col>
          
        </Row>
        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/'/> : <div></div>}

      </Container>
    );
  }
}

export default Signup;
