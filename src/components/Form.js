import React, { Component } from 'react';
import firebase from '../firebase.js';
import '../styles/form.css';
import '../styles/media.css';

class Form extends Component {
  constructor(props){
    super()
    this.state = {
      //setState to emty string
      textBox: '',
      checked: false,
    }
  }

  handleSubmit = (event) => {
    //not reloding page
    event.preventDefault();
    //create a varible that hold the refrince of the database 
    const dbRef = firebase.database().ref(`${this.props.choice}/${this.props.node}`)
    //pushing users input to firebase
    dbRef.push({
      //Targeting the user displayName insted of the whole object
      // create userName and textBox fields in quotes as a string to have that be the name in firebase for each entry
      'userName':this.props.userName.displayName,
      'textBox': this.state.textBox,
      'checked': false
    }).then (this.setState({
       textBox: ""
    }))
  }

  handleChange = (event) => {
    //updating the state we type
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render(){
    return (
      <React.Fragment>
        <form action="submit" onSubmit={this.handleSubmit}>
          {/* label gets it's text value from the label attribute that we set and passed from App.js */}
          <label htmlFor="textBox">{this.props.label}</label>

          <div className="introWrapper">
            {this.props.label === "add to list" ? 
              <p className="listIntro">
                Keep track of who is responsible for
                the survival items in your Doomsday Bunker.
              </p>
            : 
              <p className="listIntro">
                Have a tip? Write a memo for your
                bunker-mates to give them a heads up.
              </p>
            }
          </div>

          <div className="textarea clearflex">
            <input
              onChange={this.handleChange}
              type="textarea"
              name="textBox"
              id="textBox"
              required
              value={this.state.textBox}
            />
            <button type="submit">+</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;