import React, { Component } from "react";
import List from "./List.js";
import Form from "./Form.js";
import Memo from "./Memo.js";

//complex component that holds the Form component - one with the list component and one with the memo component.
class Bunker extends Component {
  render() {
    return (
      <section className="form clearfix">
        <div className="forms form1 clearfix">
          <Form
            node="list"
            label="add to list"
            userName={this.props.userName}
            choice={this.props.choice}
          />
          <List 
            userName={this.props.userName}
            choice={this.props.choice}  
          />
        </div>
        <div className="forms form2 clearfix">
          <Form 
            node="memo" 
            label="add memo" 
            userName={this.props.userName} 
            choice={this.props.choice} 
          />
          <Memo 
            userName={this.props.userName}
            choice={this.props.choice}  
          />
        </div>
      </section>
    );
  }
}

export default Bunker;
