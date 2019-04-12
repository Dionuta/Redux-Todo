import { ADD_TODO, TOGGLE_COMPLETE } from "../actions/index";

// the name says it all 
const initialState = {
  todo: [
    { id: 1, task: "Clean room", completed: false },
    { id: 2, task: "Take out trash", completed: false }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { // how the new todo should look 
        task: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todo: [...state.todo, newTodo] // new todo list with newly added todo
      }
      case TOGGLE_COMPLETE:
      return {
        ...state,
        todo: state.todo.map(todo =>
          action.payload === todo.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
};
