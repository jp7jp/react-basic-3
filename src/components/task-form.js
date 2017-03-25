import React, { Component } from 'react';
import { addTask } from '../actions';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

class TaskForm extends Component {

  handleOnSubmit(values) {
    this.props.addTask(values)
    this.props.reset();

  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleOnSubmit.bind(this))}>
        <Field name="title" component="input" type="text" placeholder="First Name"/>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTask: state.newTask
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     addTask: addTask
//   }, dispatch);
// }

TaskForm = connect(mapStateToProps, { addTask })(TaskForm);
export default reduxForm({
  form: 'addTask',
})(TaskForm);
