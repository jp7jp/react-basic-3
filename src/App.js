import React, { Component } from 'react';
import Tasks from './components/tasks';
import ActiveTask from './components/active-task';
import TaskForm from './components/task-form';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Task Manager</h2>
        </div>
        <h3>Current Tasks</h3>
        <Tasks />
        <h3>Active Task</h3>
        <ActiveTask />
        <h3>Add New Task</h3>
        <TaskForm />
      </div>
    );
  }

}

export default App;
