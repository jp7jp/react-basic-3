export const SELECT_TASK = 'SELECT_TASK';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export function selectTask(task) {
  return {
    type: 'SELECT_TASK',
    payload: task
  }
}

export function addTask(title) {
  return {
    type: 'ADD_TASK',
    payload: title
  }
}

export function removeTask(task) {
  return {
    type: 'REMOVE_TASK',
    payload: task
  }
}
