import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import NavBar from "./navbar/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar className="nav-bar" />
        <Switch>
          <Router />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
