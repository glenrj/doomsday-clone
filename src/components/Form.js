import React, { Component } from 'react';
import firebase from '../firebase.js';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      textBox: '',
      username: ''
    }
  }

  handleSubmit = (event) => {
    //not reloding page
    event.preventDefault();
    console.log('submitted');
    //create a varible that hold the refrince of the database 
    const dbRef = firebase.database().ref(`Bunker1/${this.props.node}`)
    //pushing users input to firebase
    dbRef.push({
      'username':this.state.username,
      'textBox': this.state.textBox
    })
    
    
  }

  handleChange = (event) => {
    console.log('changed');
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render(){
    return (
      <form action='submit' onSubmit={this.handleSubmit}>
        <label htmlFor='textBox'></label>
        <input onChange={this.handleChange} type='textarea' name='textBox' id='textBox' required value={this.state.textBox}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form;