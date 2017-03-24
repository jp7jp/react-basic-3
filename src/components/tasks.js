import React, { Component} from 'react';
import TaskItem from './task-item';
import { connect } from 'react-redux';

class Tasks extends Component {
  render() {
    return (
      <ul>
        {
          this.props.tasks.map((task) => {
            return <TaskItem key={task.title} task={task.title} activateTask={this.props.activateTask} removeTask={this.props.removeTask} />
          })
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(Tasks);
