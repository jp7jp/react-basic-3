import { ADD_TASK, REMOVE_TASK } from '../actions/';

const initialState = [
  {id: 1, title: 'Wake up'},
  {id: 2, title: 'Lunch'},
  {id: 3, title: 'Sleep'}
]

export const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      const newTask = {
        id: state.length + 1,
        title: action.payload.title
      }
      return [ ...state, newTask ];
    case REMOVE_TASK:
      const index = state.findIndex((obj) => obj.title === action.payload.title);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}
