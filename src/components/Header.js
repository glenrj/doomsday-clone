import React, { Component } from 'react';
import '../styles/header.css';


class Header extends Component {
  render() {
    return (
      <header className='clearfix'>
        <div className='content'>
          <p>{this.props.user}</p>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </header>
    )
  }
}

export default Header;