import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
            <Router>
              <div>
                {/* within the router we can have routes with diffrent paths that will render diffrent things on the page acording to their component */}
                {/* <Route path='/bunker' exact component={Intro} /> */}

                {/* login route(home page) when used renders the Login object which is passed username and login/logout functions*/}
                <Route path='/login' render={() => { return (
                <Login 
                  userName={this.state.userName} 
                  login={this.login} 
                  logout={this.logout}/>
                ) }} />

                {/* bunker renders both the intro and Bunker component*/}
                <Route path='/bunker' render={() => { return (
                  <div>
                    <Intro/> 
                    <Bunker userName={this.state.userName} />
                  </div>
                ) }} />

              </div>
            </Router>
          </div>
        </main>
      </div>
    );
  }
}


export default App;
