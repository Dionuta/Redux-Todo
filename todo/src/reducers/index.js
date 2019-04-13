import { ADD_TODO, TOGGLE_COMPLETE, DELETE } from "../actions/index";

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
      const newTodo = {
        // how the new todo should look
        task: action.payload,
        completed: false,
        id: Date.now()
      };
      if (action.payload.length !== 0) {
        return {
          ...state,
          todo: [...state.todo, newTodo] // new todo list with newly added todo
        };
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

    case DELETE:
      return {
        ...state,
        todo: state.todo.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
};
