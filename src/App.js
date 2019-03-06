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
      //setState to empty string
      userName: 'test'
    }
  }



  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="intro">
            <h1>DOOMSDAYYYYYYY</h1>
            {/* description */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero voluptatum vero praesentium molestiae assumenda accusantium sequi delectus reiciendis odit eveniet ex inventore omnis explicabo culpa itaque laudantium, enim vel.</p>
          </div>
          {/* node is prop we pass to form */}
          <section className="form">
            <div>
              <Form node='list' label='add to list' userName={this.state.userName} />
              <List />
            </div>
            <div>
              <Form node='memo' label='add memo' userName={this.state.userName} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
