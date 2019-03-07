import React, { Component } from 'react';
import List from './List.js'
import Form from './Form.js';
import Memo from './Memo.js';

//complex component that holds the Form component - one with the list component and one with the memo component.
class Bunker extends Component {
    render() {
        return (
            <section className='form clearfix'>
                <div>
                    <Form
                        node='list'
                        label='add to list'
                        userName={this.props.userName}
                    />
                    <List />
                </div>
                <div>
                    <Form
                        node='memo'
                        label='add memo'
                        userName={this.props.userName}
                    />
                    <Memo />
                </div>
            </section>
        )
    }
}

export default Bunker;