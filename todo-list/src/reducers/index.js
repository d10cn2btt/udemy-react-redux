import {combineReducers} from 'redux';

import todoApp from './todo_list';
import filterApp from './todo_filter';

export default combineReducers({
  todoApp,
  filterApp
})