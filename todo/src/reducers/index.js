const initialState = {
    todo: [
      { id:1, task: 'Clean room', completed: false },
      { id: 2, task: 'Take out trash', completed: false }
    ]
  };

  export default (state = initialState, action) => {
    switch (action.type) { 
        default:
          return state;
    }
  }