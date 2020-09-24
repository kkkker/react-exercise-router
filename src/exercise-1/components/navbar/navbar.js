import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <NavLink
          exact
          activeStyle={{
            textDecoration: "underline",
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{
            textDecoration: "underline",
          }}
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink
          exact
          activeStyle={{
            textDecoration: "underline",
          }}
          to={"/my-profile"}
        >
          My Profile
        </NavLink>
        <NavLink
          exact
          activeStyle={{
            textDecoration: "underline",
          }}
          to={"/about-us"}
        >
          About Us
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
