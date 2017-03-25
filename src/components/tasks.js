import React, { Component} from 'react';
import TaskItem from './task-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTask, removeTask } from '../actions';

class Tasks extends Component {
  render() {
    return (
      <ul>
        {
          this.props.tasks.map((task) => {
            return <TaskItem key={task.id} task={task} selectTask={this.props.selectTask} removeTask={this.props.removeTask} />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectTask: selectTask,
    removeTask: removeTask
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
