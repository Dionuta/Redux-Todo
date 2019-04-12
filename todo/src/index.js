//React
import React from "react";
import ReactDOM from "react-dom";

//styles
import "./index.css";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

//main Reducer
import rootReducer from "./reducers";

//Components
import Title from "./components/Title";
import Todo from "./components/Todo";

//Dummy Reducer
// function reducer() {
//   return {
//     title: 'Hello world! I\'m in the Redux store!',
//   }
// }

// store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <Title />
      <Todo />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
