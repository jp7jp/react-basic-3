import React, { Component} from 'react';
import TaskItem from './task-item';

class Tasks extends Component {
  render() {
    return (
      <ul>
        {
          this.props.tasks.map((task) => {
            return <TaskItem key={task} task={task} activateTask={this.props.activateTask} removeTask={this.props.removeTask} />
          })
        }
      </ul>
    );
  }
}

export default Tasks;
