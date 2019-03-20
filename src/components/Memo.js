import React, { Component } from 'react';
import firebase from 'firebase';
import '../styles/lists.css';

class Memo extends Component {
  constructor() {
    super()
    this.state = {
      memo: []
    }
  }

  handleClick = (event) => {
    //get name from button
    //save name as variable
    const memo = event.target.name
    //use variable to target node in firebase
    const dbRef = firebase.database().ref(`${this.props.choice}/memo/${memo}`);
    dbRef.remove();
  }

  // create a variable to hold the reference of the database
  // get list from firebase to display on page
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
      const bunkerData = data[bunker].memo
      // create a new array to store our mapped values
      const memoItems = [];

      // loop through each object in data (object = entry in firebase)
      for (let entry in bunkerData) {
        // push the following info into the listItems array we created above
        memoItems.push({
          // take values from each entry and assign it a variable 
          key: entry,
          // data is 'List' from firebase, entry is each unique entry, textBox is the name of the value
          // [entry] needed because we don't know the exact name
          textBox: bunkerData[entry].textBox,
          userName: bunkerData[entry].userName
        })
      }
      // update state of list to listItems so we have access to it outside the function
      this.setState({
        memo: memoItems
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.choice !== prevProps.choice) {
      this.pageRefresh();
    }
  }

  render() {
    return (
      <section className='lists'>
        <ul>
          {/* map over the list that has the information from listItem and return for each item an li object that has all the properties below */}
          {this.state.memo.map(items => {
            return (
              <li key={items.key} className="clearfix">
                {/* create a checkbox with attributes of id to match the labels id */}
                <p>{items.userName}  {items.userName == this.props.userName.displayName ? <button className='deleteItem' name={items.key} onClick={this.handleClick}>x</button> : null}</p>
                  {/* give button a name to target it without using an id and use that name to delete item later from firebase */}
                <div className="items">
                  <p className="item">{items.textBox}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

    )
  }
}


export default Memo;