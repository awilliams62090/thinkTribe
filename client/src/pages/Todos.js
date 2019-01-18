import React, {Component} from "react";
import TaskList from "../components/Tasks/TaskList";
import Header from "../components/Layout/Header";
import AddTask from "../components/Tasks/AddTask";
import "../App.css";
// import uuid from "uuid";
import axios from "axios";


class Todos extends Component {
    state = {
        tasks: []
    }
    //Get dummy data from Json placeholder while server not up 
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res => {
            console.log(this.data);
            this.setState({tasks: res.data})
            })
    }; 

    //toggle complete
    markComplete = (id) =>{
        console.log(id);
        this.setState({tasks: this.state.tasks.map(task => {
            if(task.id === id){
                task.completed= !task.completed
            }
            return task;
        })});
      };

    // delete button
    delTask = (id) =>{
        console.log("Deleting task id: " + id);
        axios.delete("https://jsonplaceholder.typicode.com/todos/${id}", id).then(res=> this.setState({tasks: [...this.state.tasks.filter(tasks=> tasks.id !== id)]}));
    }

    //Add task
    addTask = (title) =>{
        console.log(title);
        axios.post("https://jsonplaceholder.typicode.com/todos", {title, 
        completed: false}).then( res=> this.setState({tasks: [...this.state.tasks, res.data]}));
    }

    
    render(){
        console.log(this.state.tasks);
        return (
            <div>
            <Header />
            <AddTask addTask={this.addTask} />
            <TaskList tasks= {this.state.tasks} markComplete={this.markComplete} delTask={this.delTask}/>
            </div>
        );
    }
}export default Todos;