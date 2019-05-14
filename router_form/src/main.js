import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// Action flows enters middlewares => Redux-Promise Middleware check that action have a promise as a payload
// No => let it go through => go to reducer
// Yes => Stop this action => After promise resolves, create a new action & send it to reducers
import ReduxPromise from 'redux-promise';
import {BrowserRouter as Router, Route} from "react-router-dom";

import App from './components/app';
import reducers from './reducers';

import './style/style.scss';
import PostsNew from "./containers/posts_new";
import PostsIndex from "./containers/posts_index";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <App/>
        <Route exact path="/" component={PostsIndex}/>
        <Route path="/post" component={PostsNew}/>
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
