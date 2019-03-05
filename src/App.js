import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';


class App extends Component {
  constructor() {
    super()
    this.state = {
      //setState to emty string
      username: ''
    }
  }
  
  

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="intro">
            <h1>DOOMSDAYYYYYYY</h1>
            {/* discription */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero voluptatum vero praesentium molestiae assumenda accusantium sequi delectus reiciendis odit eveniet ex inventore omnis explicabo culpa itaque laudantium, enim vel.</p>
          </div>
          {/* node is prop we pass to form */}
          <Form node='List' label='add to list' username={this.state.username}/>
          <Form node='Memo' label='add memo'/>
        </main>
      </div>
    );
  }
}

export default App;
