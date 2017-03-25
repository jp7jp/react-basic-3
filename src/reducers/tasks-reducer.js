import { ADD_TASK } from '../actions/';

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
        title: action.payload
      }
      return [ ...state, newTask ];
    default:
      return state;
  }
}
