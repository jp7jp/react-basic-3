import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions';

class TaskForm extends Component {

  state = {
    title: ''
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.title);
    console.log(this.state.title);
    this.setState({
      title: ''
    });

  }

  handleOnChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <input type="text" value={this.state.title} onChange={this.handleOnChange.bind(this)} />
        <input type="submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTask: state.newTask
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTask: addTask
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
