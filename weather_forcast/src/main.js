import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// Action flows enters middlewares => Redux-Promise Middleware check that action have a promise as a payload
// No => let it go through => go to reducer
// Yes => Stop this action => After promise resolves, create a new action & send it to reducers
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

import './style/style.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>,
  document.querySelector('.container')
);
