import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { feedReducer } from './components/Pages/FeedPage/reducer';
import App from "./components/App.js";

const allReducer = combineReducers({ feed: feedReducer })
const store = createStore(allReducer);

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById("root"));