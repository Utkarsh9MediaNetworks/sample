import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
    cartReducer,
    applyMiddleware(thunk)
    );
console.log(store.getState()) // 0

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));