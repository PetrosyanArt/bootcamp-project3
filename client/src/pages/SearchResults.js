import React, { Component } from "react";

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
          <div>
            <br />
            <br />
            <br />
            <br />
            {this.state.beer.name}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SearchResults;
