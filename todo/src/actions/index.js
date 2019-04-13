export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE = 'DELETE';


export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function toggleComplete(id) {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
}

export function deleteTodo(id) {
  return{
    type: DELETE,
    payload: id
  }
}