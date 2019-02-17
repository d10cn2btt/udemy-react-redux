import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/app';
import reducers from './reducers';

import './style/style.scss';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(reducers)

// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('.container')
);
