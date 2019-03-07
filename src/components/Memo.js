import React, {Component} from 'react';
import firebase from 'firebase';

class Memo extends Component {
    constructor() {
        super()
        this.state = {
            // create an empty array of list
            memo: []

        }
    }

    handleClick = (event) => {
        //get name from button
        //save name as variable
        const memo = event.target.name
        //use variable to target node in firebase
        const dbRef = firebase.database().ref(`Bunker1/memo/${memo}`);
        dbRef.remove();
    }

    // create a variable to hold the reference of the database
    // get list from firebase to display on page
    componentDidMount() {
        const dbRef = firebase.database().ref('Bunker1/memo');
        // get whole List from database
        dbRef.on('value', response => {
            const data = response.val();
            console.log(data);
            // create a new array to store our mapped values
            const memoItems = [];

            // loop through each object in data (object = entry in firebase)
            for (let entry in data) {
                // push the following info into the listItems array we created above
                memoItems.push({
                    // take values from each entry and assign it a variable 
                    key: entry,
                    // data is 'List' from firebase, entry is each unique entry, textBox is the name of the value
                    // [entry] needed because we don't know the exact name
                    textBox: data[entry].textBox,
                    userName: data[entry].userName
                })
            }
            // update state of list to listItems so we have access to it outside the function
            this.setState({
                memo: memoItems
            })
        })
    }

    render() {
        return (
            <section className='memos'>
                <ul>
                    {/* map over the list that has the information from listItem and return for each item an li object that has all the properties below */}
                    {this.state.memo.map(items => {
                        return (
                            // the key is 'entry' from the for loop above
                            <li key={items.key}>
                                {/* create a checkbox with attributes of id to match the labels id */}
                                <label htmlFor={items.key}>{items.textBox}</label>
                                <p>{items.userName}</p>
                                {/* give button a name to target it without using an id and use that name to delete item later from firebase */}
                                {items.userName == this.props.userName.displayName ? <button className='deleteItem' name={items.key} onClick={this.handleClick}>X</button> : null}                            </li>
                        )
                    })}
                </ul>
            </section>

        )
    }


    
}


export default Memo;