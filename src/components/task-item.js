import React, { Component } from 'react';

class TaskItem extends Component {

  handleClick() {
    this.props.activateTask(this.props.task);
  }

  handleRemoveClick() {
    this.props.removeTask(this.props.task);
  }

  render() {
    return (
      <li>
        <span onClick={this.handleRemoveClick.bind(this)} style={{ color: 'red' }}>X</span>
        &nbsp;
        <span onClick={this.handleClick.bind(this)}>{this.props.task}</span>
      </li>
    );
  }
}

export default TaskItem;
