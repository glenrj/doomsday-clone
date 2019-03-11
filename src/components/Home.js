import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import Login from '../components/Login.js';
import Intro from '../components/Intro.js';
import Bunker from '../components/Bunker.js';

import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import Map from '../components/Map.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

// import './components/doom.jpg';
import alexBunker from '../assets/alexBlue.jpg';
import glenBunker from '../assets/glenBlue.jpg';
import oizaBunker from '../assets/oizaBlue.jpg';
import zoeBunker from '../assets/zoeBlue.jpg';

//sets google as the authentication provider thru firebase
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

//we changed database read and write rules in firebase

//change any place where bunker1 is used
//creating 3 more bunkers
//change bunker properties
//select or radio buttons allow user to choose which bunker to join
//on select it updates bunker in state
// multiple bunkers represented by boxes on the screen

class Home extends Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      bunker: ''
    };
  }
  //set state by default to null (upon home page load, no username)

  //function that gets the user in upon clicking the 'login' button (conditionally rendered)
  login = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        userName: user
      });
    });
  };

  //function that logs out upon clicking the 'logout' button
  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        userName: null
      });
    });
  };

  guest = () => {
    const guestName = {
      displayName: 'Guest'
    };
    this.setState({
      userName: guestName
    });
  };

  setBunker = event => {
    //Search for specific bunker from bunkerList and set as current Bunker
    //2. Make firebase call get info on specific bunker? Set as list
    const bunkerChoice = event.target.value;
    this.setState({
      bunker: bunkerChoice
    });
  };

  //upon page load, if a user is logged in, persist the login
  componentDidMount() {
    //Fetch All Bunkers
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          userName: user
        });
      }
    });
  }

  componentDidUpdate() {
    console.log(this.state.bunker);
  }

  render() {
    return (
      <div className='App'>
        {this.state.userName ? (
          <Header
            logout={this.props.logout}
            user={this.props.userName.displayName}
          />
        ) : null}
        <div className='wrapper'>
          <main>
            <div>
              {/* used ternary operator to check if userName is truthy then show Bunker component otherwise show Login component */}
              {this.state.userName ? (
                <div>
                  <Intro />
                  <form
                    className='bunkerNames clearfix'
                    action=''
                    onChange={this.setBunker}
                  >
                    <input
                      type='radio'
                      name='bunkerChoice'
                      id='alex'
                      value='alex'
                    />
                    <label htmlFor='alex' className='alexBunkerLabel'>
                      <p>Alex's Bunker</p>
                      <img
                        src={alexBunker}
                        alt='image of a house on a mountain'
                        className='bunkerImage'
                      />
                    </label>
                    <input
                      type='radio'
                      name='bunkerChoice'
                      id='glen'
                      value='glen'
                    />
                    <label htmlFor='glen'>
                      <p>Glen's Bunker</p>
                      <img
                        src={glenBunker}
                        alt='image of a city landscape'
                        className='bunkerImage'
                      />
                    </label>
                    <input
                      type='radio'
                      name='bunkerChoice'
                      id='oiza'
                      value='oiza'
                    />
                    <label htmlFor='oiza'>
                      <p>Oiza's Bunker</p>
                      <img
                        src={oizaBunker}
                        alt='image of sand dune with several people shown standing on the dune'
                        className='bunkerImage'
                      />
                    </label>
                    <input
                      type='radio'
                      name='bunkerChoice'
                      id='zoe'
                      value='zoe'
                    />{' '}
                    <label htmlFor='zoe'>
                      <p>Zoe's Bunker</p>
                      <img
                        src={zoeBunker}
                        alt='image of a country road'
                        className='bunkerImage'
                      />
                    </label>
                  </form>

                  <Bunker
                    userName={this.state.userName}
                    choice={this.state.bunker}
                  />
                </div>
              ) : (
                <Login
                  userName={this.state.userName}
                  login={this.login}
                  guest={this.guest}
                />
              )}
            </div>
            <Map choice={this.state.bunker} />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;