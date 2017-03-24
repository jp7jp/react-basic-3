export const SELECT_TASK = 'SELECT_TASK';

export function selectTask(task) {
  return {
    type: 'SELECT_TASK',
    payload: task
  }
}
