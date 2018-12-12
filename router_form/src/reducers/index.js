import {combineReducers} from 'redux';

import BookReducer from './reducer_posts';

export default combineReducers({
  books: BookReducer,
});
