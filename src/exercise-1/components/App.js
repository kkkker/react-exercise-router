import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./navbar/navbar";
import Home from "./home/home";
import MyProfile from "./profile/profile";
import AboutUs from "./about/about";
import Products from "../../exercise-2/product/products";
import ProductDetails from "../../exercise-2/details/details";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar className="nav-bar" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/my-profile" component={MyProfile} />
          <Route exact path="/about-us" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
