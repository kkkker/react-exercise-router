import React, { Component } from "react";
import './home.css';

class Home extends Component {
  render() {
    const url = this.props.match.url;
    return (
      <div className="home">
        <p>This is a beautiful Home Page.</p>
    <p>And the url is "{url}"</p>
      </div>
    );
  }
}

export default Home;
