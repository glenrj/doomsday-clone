import React, { Component } from 'react';


class Header extends Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    return (
      <header>
        <div className="wrapper">
          <p>userName</p>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </header>
    )
  }
}

export default Header;