import React, { Component } from "react";
import Card from '../components/Card';

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
  closeDetail = () =>{
    this.setState({beer: ""})
  }
  render() {
    return (
      <div>
        {this.props.results.length > 0 && !this.state.beer
          ? this.props.results.map(beer => {
              return (
                <div onClick={() => this.beerDetail(beer.id)}>
                  <div>{beer.name}</div>    
                </div>
              );
            })
          : ""}

        {this.state.beer ? (
         <Card onClose={this.closeDetail} theBeer={this.state.beer}/>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SearchResults;
