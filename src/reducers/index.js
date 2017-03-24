import { combineReducers } from 'redux';
import { tasksReducer } from './tasks-reducer';
import { activeTaskReducer } from './active-task-reducer';

export default combineReducers({
  tasks: tasksReducer,
  activeTask: activeTaskReducer
});
