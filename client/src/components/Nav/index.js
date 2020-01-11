import React from "react";
import "./style.css";
import axios from 'axios';
import { Spinner } from "reactstrap";

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
    
  }
  handleFormChange= (e) => {
    console.log(e.target.value);
    this.setState({value:e.target.value})
    console.log("form change")
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    axios.get('/api/beers/' + this.state.value)
      .then(response =>
        {
          console.log(response.data.data);
          this.props.popResults(response.data.data)
          // this.setState({results:response.data.data})
        })
        .catch(e => console.log(e))
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ zIndex: 100 }}
      >
        <a className="navbar-brand" href="/">
          Cap Collector
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/signup">
                Create Account
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Sign In
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search for beers"
              aria-label="Search"
              value={this.state.value} 
              onChange={this.handleFormChange}
            />
            <button class="btn btn-secondary my-2 my-sm-0" onClick={this.handleFormSubmit} type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
