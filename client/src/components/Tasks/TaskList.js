import React, {Component} from "react"; 
import TaskItem from "./TaskItem";
import propTypes from "prop-types";

class TaskList extends Component { 
    
    render(){
        return this.props.tasks.map((task) => (
            <TaskItem key={task.id} tasks= {task} markComplete= {this.props.markComplete} delTask= {this.props.delTask}/>
        ));
    }
}

//PropTypes required
TaskList.propTypes = {
    tasks: propTypes.array.isRequired,
    markComplete: propTypes.array.isRequired,
    delTask: propTypes.array.isRequired,
};

export default TaskList;