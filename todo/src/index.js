//React
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

//Components
import App from "./components/App";

//Dummy Reducer 
function reducer() {
  return {
    title: 'Hello world! I\'m in the Redux store!',
  }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
