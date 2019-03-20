import React, { Component } from 'react';
import firebase from '../firebase.js';
import '../styles/lists.css';


class List extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  handleClick = (event) => {
    //get name from button
    //save name as variable
    const list = event.target.name
    //use variable to target node in firebase
    const dbRef = firebase.database().ref(`${this.props.choice}/list/${list}`);
    dbRef.remove();
  }

  // create a variable to hold the reference of the database
  componentDidMount() {
    this.pageRefresh();
  }
  
  pageRefresh = () => {
    // get list from firebase to display on page
    const dbRef = firebase.database().ref();
    // get whole List from database
    dbRef.on('value', response => {
      const data = response.val();
      let bunker = this.props.choice
      const bunkerData = data[bunker].list
      // create a new array to store our mapped values
      const listItems = [];

      // loop through each object in data (object = entry in firebase)
      for (let entry in bunkerData) {
        // push the following info into the listItems array we created above
        listItems.push({
          // take values from each entry and assign it a variable 
          key: entry,
          // data is 'List' from firebase, entry is each unique entry, textBox is the name of the value
          // [entry] needed because we don't know the exact name
          textBox: bunkerData[entry].textBox,
          userName: bunkerData[entry].userName,
          isChecked: bunkerData[entry].checked
        })
      }
      // update state of list to listItems so we have access to it outside the function
      this.setState({
        list: listItems
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.choice !== prevProps.choice) {
      this.pageRefresh();
  }
}


  updateCheck = (checkboxID) => {
    //once checkbox is checked, use ID to set firebase "checked" value to true
    const dbRef = firebase.database().ref(`${this.props.choice}/list/${checkboxID}`);
    dbRef.once('value', response => {
      const isChecked = response.val().checked
      dbRef.update({checked: !isChecked})
    })
    }

  evaluateIfChecked = (item) => {
    // { this.state.list[item].isChecked ? checked}
    const dbRef = firebase.database().ref(`${this.props.choice}/list/${item}/checked`);
    dbRef.on('value', response => {
      return(response.val())
    })
  }


  render() {

    return (
      <section className='lists'>
        <ul>
          {/* map over the list that has the information from listItem and return for each item an li object that has all the properties below */}
          {this.state.list.map(items => {
            return (
              // the key is 'entry' from the for loop above
              <li key={items.key} className="clearfix">
                {/* create a checkbox with attributes of id to match the labels id */}
                <input type='checkbox' 
                id={items.key} 
                onChange={() => {this.updateCheck(items.key)}}
                checked={items.isChecked} />

              {/*each item is pushed with a checked:false property.
              create function */} 

                <p>{items.userName}  {items.userName == this.props.userName.displayName ? <button className='deleteItem' name={items.key} onClick={this.handleClick}>x</button> : null}</p>

                <div className="items">
                  <label className="item listItem" htmlFor={items.key}>{items.textBox}</label>
                </div>
                {/* give button a name to target it without using an id and use that name to delete item later from firebase */}
                {/* userName.displayName gets actual name inside of user object that was passed in through props onChange={this.updateCheck(items.key)}*/}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default List;