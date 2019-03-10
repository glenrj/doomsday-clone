import React, { Component } from "react";
import Header from "./Header.js";

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <Header logout={this.props.logout} user={this.props.user}/>
        <h1>To doom list</h1>
      </div>
    );
  }
}

export default Intro;
