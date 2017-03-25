import React from 'react';
import { addTask } from '../actions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const TaskForm = (props) => {

  const handleOnSubmit = (values) => {
    props.addTask(values)
    props.reset();
  }

  const { handleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={handleSubmit(handleOnSubmit.bind(this))}>
      <Field name="title" component="input" type="text" placeholder="First Name"/>
      <button type="submit" disabled={pristine || submitting}>Submit</button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    newTask: state.newTask
  }
}

export default connect(mapStateToProps, { addTask })(reduxForm({
  form: 'addTask'
})(TaskForm));
