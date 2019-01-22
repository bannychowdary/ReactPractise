import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from "./reducers/combine-reducers";
import HelloRedux from './component/helloredux'

const reduxStore = createStore(allReducers)
console.log(allReducers)
console.log(reduxStore)

ReactDOM.render(
    <Provider store={reduxStore}>
    <HelloRedux></HelloRedux></Provider>,
    document.getElementById('reduxroot')
)