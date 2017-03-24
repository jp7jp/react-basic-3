import React, { Component } from 'react';

class ActiveTask extends Component {
  render() {
    if (!this.props.task) {
      return (
        <div>Please select a task</div>
      );
    }

    return (
      <div>{ this.props.task }</div>
    );
  }
}

export default ActiveTask;
