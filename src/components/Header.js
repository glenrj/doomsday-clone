import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  handleSubmit = () => {
    console.log('submitted');
  }

  handleChange = () => {
    console.log('changed');
  }

  render() {
    return (
      <header>
        <div className="wrapper">
          <p>Username</p>
          <button></button>
        </div>
      </header>
    )
  }
}

export default Header;