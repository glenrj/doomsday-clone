import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import Header from './components/Header';
import Form from './components/Form';


class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="intro">
            <h1>DOOMSDAYYYYYYY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero voluptatum vero praesentium molestiae assumenda accusantium sequi delectus reiciendis odit eveniet ex inventore omnis explicabo culpa itaque laudantium, enim vel.</p>
          </div>
          <Form node='List'/>
          <Form node='Memo' />
        </main>
      </div>
    );
  }
}

export default App;
