import React, { Component } from 'react';
import Tasks from './components/tasks';
import ActiveTask from './components/active-task';
import TaskForm from './components/task-form';
import './App.css';

class App extends Component {

  state = {
    tasks: ['Wake up', 'Lunch', 'Sleep'],
    activeTask: null,
    newTask: ''
  }

  activateTask(task) {
    this.setState({
      activeTask: task
    });
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
    this.setState({
      newTask: ''
    });
  }

  removeTask(task) {
    this.setState({
      tasks: this.state.tasks.filter(value => value !== task)
    });
  }

  updateNewTaskValue(task) {
    this.setState({
      newTask: task
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Task Manager</h2>
        </div>
        <h3>Current Tasks</h3>
        <Tasks tasks={this.state.tasks} activateTask={this.activateTask.bind(this)} removeTask={this.removeTask.bind(this)} />
        <h3>Active Task</h3>
        <ActiveTask task={this.state.activeTask} />
        <h3>Add New Task</h3>
        <TaskForm newTask={this.state.newTask} updateNewTaskValue={this.updateNewTaskValue.bind(this)} addTask={this.addTask.bind(this)} />
      </div>
    );
  }
}

export default App;
