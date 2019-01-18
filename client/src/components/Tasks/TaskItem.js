import React, { Component } from 'react'
import propTypes from "prop-types";

export class TaskItem extends Component {
  getStyle = () => {
    //   if(this.props.tasks.completed){
    //       return{
    //           textDecoration:"line-through"
    //       }
    //   }else{
    //       return{
    //           textDecoration: "none"
    //       }
    //   }
      return{
          textDecoration: this.props.tasks.completed ? 
          "line-through" : "none"
      }
  }


  
    render() {
        const { id, title } = this.props.tasks;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {" "}
            {title}
            <button onClick={this.props.delTask.bind(this, id)} style={deleteBtn} >X</button>
        </p>
      </div>
    )
  }
}


//PropTypes required
TaskItem.propTypes = {
    tasks: propTypes.object.isRequired,
    markComplete: propTypes.array.isRequired,
    delTask: propTypes.array.isRequired,
};

const deleteBtn ={
    background: "#ff0000",
    color: "#fff",
    border: "none", 
    padding: "5px 10px", 
    borderRadius: "50%",
    cursor: "pointer", 
    float: "right"
}

export default TaskItem;
