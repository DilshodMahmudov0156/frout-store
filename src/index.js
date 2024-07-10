import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import fruitReducer from "./redux/redux";
const store = createStore(fruitReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  /*</React.StrictMode>*/
);
