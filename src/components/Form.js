import React, { Component } from 'react';
import firebase from '../firebase.js';
import List from './List.js'

class Form extends Component {
  constructor(props){
    super()
    this.state = {
      //setState to emty string
      textBox: '',
    }
  }

  handleSubmit = (event) => {
    //not reloding page
    event.preventDefault();
    console.log('submitted');//TBD
    //create a varible that hold the refrince of the database 
    const dbRef = firebase.database().ref(`Bunker1/${this.props.node}`)
    //pushing users input to firebase
    dbRef.push({
      'userName':this.props.userName.displayName,
      'textBox': this.state.textBox
    })
    
    
  }

  handleChange = (event) => {
    console.log('changed');//TBD
    //updating the state we type
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <React.Fragment>
        <form action='submit' onSubmit={this.handleSubmit}>
          {/* label gets it's text value from the label attribute that we set and passed from App.js */}
          <label htmlFor='textBox'>{this.props.label}</label>
          <input onChange={this.handleChange} type='textarea' name='textBox' id='textBox' required value={this.state.textBox}/>
          <button type='submit'>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Form;