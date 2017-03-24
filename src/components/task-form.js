import React, { Component } from 'react'

class TaskForm extends Component {

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.props.newTask);
  }

  handleOnChange(e) {
    this.props.updateNewTaskValue(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <input type="text" value={this.props.newTask} onChange={this.handleOnChange.bind(this)} />
        <input type="submit" />
      </form>
    );
  }
}

export default TaskForm;
