import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Intro from './components/Intro.js';
import Bunker from './components/Bunker.js';

//TOMORROWS PROB : we need to undo all the routing stuff and change it to a conditional rendering using ternary opratior if true show bunker if not show log in :D 

//sets google as the authentication provider thru firebase
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

//we changed database read and wright rules in firebase 

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: null
    };
  }
  //set state by default to null (upon home page load, no username)

  //function that gets the user in upon clicking the 'login' button (conditionally rendered)
  login = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        userName: user
      })
    })
  }

  //function that logs out upon clicking the 'logout' button
  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        userName: null
      })
    })
  }

  //upon page load, if a user is logged in, persist the login
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          userName: user
        })
      }
    })
  }

  
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <div className='wrapper'>
          {/* testing stuff */}
            {/* <Bunker userName={this.state.userName}/> */}
            {/* Router */}
              <div>
                {/* used ternary operator to check if userName is truthy then show Bunker component otherwise show Login component */}
                {this.state.userName ? 
                <div>
                  <Intro/> 
                  <Bunker userName={this.state.userName} />
                </div>
                 : 
                <Login 
                  userName={this.state.userName} 
                  login={this.login} 
                  logout={this.logout}/>
                }

              </div>
          </div>
        </main>
      </div>
    );
  }
}


export default App;
