import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  handleSubmit = () => {
    console.log('submitted');
  }

  handleChange = () => {
    console.log('changed');
  }

  render(){
    return (
      <form action="submit" onSubmit={}>
        <label htmlFor="textbox"></label>
        <input type="textarea" id="textbox" required/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;