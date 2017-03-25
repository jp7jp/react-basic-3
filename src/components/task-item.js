import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskItem extends Component {

  handleClick() {
    this.props.selectTask(this.props.task);
  }

  handleRemoveClick() {
    this.props.removeTask(this.props.task);
  }

  render() {
    return (
      <li>
        <span onClick={this.handleRemoveClick.bind(this)} style={{ color: 'red' }}>X</span>
        &nbsp;
        <Link to={`/tasks/${this.props.task.id}`} onClick={this.handleClick.bind(this)}>{this.props.task.title}</Link>
      </li>
    );
  }
}

export default TaskItem;
