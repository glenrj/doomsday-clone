import React, { Component } from 'react';


//we use this.props.user (not state) because we're passing the user property from App.js

//login logout functions were written in App.js and will be passed here as props

class Login extends Component {
  render(){
    return(
      <div>
        <h1>Doomsday Jamboree</h1>
        <p>description of our amazing app</p>
        {this.props.userName ? <button onClick={this.props.logout}>Log Out</button> : <button onClick={this.props.login}>Log In</button>}
      </div>
    )
  } //the button onclick functions are in App. So we're passing those functions in by props. The username is put in App (not login) bcuz we'll be accessing it in both components
}

export default Login;