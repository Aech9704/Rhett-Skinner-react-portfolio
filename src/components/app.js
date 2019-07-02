import React, { Component } from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import axios from 'axios';

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolioDetail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus:"NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this) 
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this)

  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }


  cheackLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", {
      withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN => return data
        // if loggedIn  status NOT_LOOGED_IN => update state
        // if not loggedIn Status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("ERROR", error)
      });
  }

  componentDidMount() {
    this.cheackLoginStatus();
  }

  authorizedPages() {
    return [
      <Route path="/blog" component={blog} />
    ]
  }

  render() {
    return (
      <div className="container">
        

        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleUnsuccessfulLogout={this.handleUnsuccessfulLogout}
            />

            <h2>{this.state.loggedInStatus}</h2>

            <Switch>
              <Route exact path="/" component={Home} />


              <Route 
                path="/auth" 
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )} 
              />


              <Route path="/about-me" component={About} />
              <Route path="/contact" component={contact} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              {this.state.loggedInStatus === "LOGGED_IN" ? (this.authorizedPages()) : null}
              <Route component={NoMatch} />
            </Switch>
          </div>
      </Router>
    </div>
    );
  }
}