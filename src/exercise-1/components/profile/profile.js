import React, { Component } from "react";
import "./profile.css";

class MyProfile extends Component {
  render() {
    const url = this.props.match.url;
    return (
      <div className="my-profile">
        <p>Username: XXX</p>
        <p>Gender: Female</p>
        <p>Work: IT Industry</p>
        <p>Website: "{url}"</p>
      </div>
    );
  }
}

export default MyProfile;
