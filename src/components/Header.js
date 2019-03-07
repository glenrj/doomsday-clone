import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header className='clearfix'>
        <div className='wrapper'>
          <p>Welcome to the bunker, {this.props.user}</p>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </header>
    )
  }
}

export default Header;