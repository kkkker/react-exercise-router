import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./about.css";

class AboutUs extends Component {
  render() {
    return (
      <div className="my-profile">
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
        <br />
        <p>For more information, please</p>
        <p>
          view our:{" "}
          <NavLink
            to="/"
            activeStyle={{
              color: "red",
            }}
          >
            website
          </NavLink>
          .
        </p>
      </div>
    );
  }
}

export default AboutUs;
