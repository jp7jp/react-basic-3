import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';

class ActiveTask extends Component {

  componentWillMount() {
    const task = this.props.tasks.find((task) => (task.id === parseInt(this.props.match.params.activeTaskId, 10)));
    if (task) {
      this.props.selectTask(task);
    }
  }

  render() {
    if (!this.props.activeTask) {
      return (
        <div>Please select a task</div>
      );
    }

    return (
      <div>{ this.props.activeTask.title }</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    activeTask: state.activeTask
  }
}

export default connect(mapStateToProps, { selectTask })(ActiveTask);
