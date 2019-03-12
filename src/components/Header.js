import React, { Component } from 'react';
import '../styles/header.css';


class Header extends Component {
  render() {
    return (
      <header className='clearfix'>
        <div className='content wrapper'>
          <p>{this.props.user}</p>
          <button onClick={this.props.logout}>{this.props.user == 'Guest' ? 'Log In' : 'Log Out'}</button>
        </div>
      </header>
    )
  }
}

export default Header;