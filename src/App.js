import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from 'firebase';
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Memo from "./components/Memo.js";
import Login from './components/Login';

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
  componentDidMount(){
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
      <div className="App">
        <Header />
        <main>
          <div className="wrapper">
            <div className="intro">
              <h1>DOOMSDAYYYYYYY</h1>
              {/* description */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur libero voluptatum vero praesentium molestiae
                assumenda accusantium sequi delectus reiciendis odit eveniet ex
                inventore omnis explicabo culpa itaque laudantium, enim vel.
              </p>
            </div>
            {/* node is prop we pass to form */}
            <section className="form clearfix">
              <div>
                <Form
                  node="list"
                  label="add to list"
                  userName={this.state.userName}
                />
                <List />
              </div>
              <div>
                <Form
                  node="memo"
                  label="add memo"
                  userName={this.state.userName}
                />
                <Memo />
              </div>
            </section>
          </div>
          <Login user={this.state.userName} login={this.login} logout={this.logout}/>

        </main>
      </div>
    );
  }
}


export default App;
