import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./navbar/navbar";
import Home from "./home/home";
import MyProfile from "./profile/profile"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar className="nav-bar" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my-profile" component={MyProfile} />
          <Route exact path="/about-us" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
