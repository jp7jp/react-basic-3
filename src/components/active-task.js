import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveTask extends Component {
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
    activeTask: state.activeTask
  }
}

export default connect(mapStateToProps)(ActiveTask);
