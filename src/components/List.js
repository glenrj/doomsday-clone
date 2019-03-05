import React, { Component } from 'react';
import firebase from '../firebase.js';


class List extends Component {
  constructor() {
    super()
    this.state = {
      list: []
      
    }
  }

  // create a variable to hold the reference of the database
  // get list from firebase to display on page
  componentDidMount() {
    const dbRef = firebase.database().ref('Bunker1/List');
    // get whole List from database
    dbRef.on('value', response => {
      const data = response.val();
      console.log(data);
      const listItems = [];

      // loop through each object in data (object = entry in firebase)
      for (let entry in data) {
        // push the following info into the listItems array we created above
        listItems.push({
          // take values from each entry and assign it a variable 
          key: entry,
          // data is 'List' from firebase, entry is each unique entry, textBox is the name of the value
          // [entry] needed because we don't know the exact name
          textBox: data[entry].textBox,
          username: data[entry].username
        })
      }
      // update state of list to listItems so we have access to it outside the function
      this.setState({
        list: listItems
      })
    })
  }

  render() {
    return (
      <section className='equipment'>
        <ul>
          {this.state.list.map(items => {
            return (
              <li key={items.key}>
                <input type='checkbox' id={items.key} name={items.key}></input>
                <label htmlFor={items.key}>{items.textBox}</label>
                <p>{items.username}</p>
                <button className='deleteItem' id={items.key}></button>
              </li>
            )
          })}
          <li>{}</li>
        </ul>
      </section>

    )
  }
}

export default List;