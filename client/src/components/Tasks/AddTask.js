import React, { Component } from 'react'
import propTypes from "prop-types";

export class AddTask extends Component {

    state= {
        title: ""
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({title: " "});
    }

    onChange = (event) => this.setState({title: event.target.value});

  render() {
    return (
      <form  onSubmit={this.onSubmit} style= {{display: "flex"}}>
          <input type="text" name="title" style={{flex: "10", padding: "5px"}} placeholder="Add a Task" value= {this.state.title}  onChange={this.onChange}/>
          <input type="submit" value="Submit" className="btn" style={{flex: "1"}}/>
      </form>
    )
  }
}

//PropTypes required
AddTask.propTypes = {
    tasks: propTypes.object.isRequired,
    markComplete: propTypes.array.isRequired,
    delTask: propTypes.array.isRequired,
};

export default AddTask
