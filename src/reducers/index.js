import { combineReducers } from 'redux';
import { tasksReducer } from './tasks-reducer';
import { activeTaskReducer } from './active-task-reducer';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
  form: formReducer,
  tasks: tasksReducer,
  activeTask: activeTaskReducer
});
