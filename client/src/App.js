import React from "react";
import {
  StaticRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Beers from "./pages/Beers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import NewReviews from "./components/NewReviews";
import FrontPageBeers from "./components/FrontPageBeers";
import About from "./components/About";
import Landing from "./pages/Landing";
import SearchResults from "./pages/SearchResults";

import { /* getCookie, */ authenticateUser } from "./utils/handleSessions";

const PrivateRoute = ({ component: Component, state: state, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      state.authenticated === true ? (
        <Component {...props} />
      ) : state.loading === true ? (
        <div></div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

class App extends React.Component {
  // check cookie
  // getCookie();
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      loading: false,
      ssr: props.ssr ? true : false,
      results: []
    };
  }

  populateSearchResults = res => {
    this.setState({ results: res });
  };
  authenticate = () =>
    authenticateUser()
      .then(auth =>
        this.setState({
          authenticated: auth.status == 200 ? true : false,
          loading: false
        })
      )
      .catch(err => console.log(err));

  componentWillMount() {
    // this.authenticate();
  }

  render() {
    const RouterComponent = this.state.ssr ? StaticRouter : Router;
    return (
      <RouterComponent>
        <div>
          <Nav popResults={this.populateSearchResults} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Landing results={this.state.results} />}
            />
            <Route
              exact
              path="/searchresults"
              render={() => <SearchResults results={this.state.results} />}
            />

            <Route
              exact
              path="/beers"
              render={props => (
                <Beers
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            <Route
              exact
              path="/detail"
              render={props => (
                <Detail
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            <PrivateRoute
              exact
              path="/beers"
              state={this.state}
              component={Beers}
            />
            <Route component={NoMatch} />
            <Route path="/" component={Beers} />
          </Switch>

          {/* <Switch>
            <Route
              exact
              path="/"
              render={(props) =>
                <Login {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />}
            />
            <Route
              exact
              path="/signup"
              render={(props) =>
                <Signup {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />}
            />
            <PrivateRoute exact path="/beers" state={this.state} component={Beers} />
            <Route component={NoMatch} />
             <Route path="/" component={Beers} />
            <Route
              exact
              path="/"
              render={() =>
                <Beers />}
            />

          </Switch> */}
          {this.state.results.length >0 
          ? <Redirect to="/searchresults" />
          : ""
            }
        </div>
      </RouterComponent>
    );
  }
}

export default App;
