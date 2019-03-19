import { combineReducers } from 'redux'

import todoApp from './todo_list'
import filterApp from './todo_filter'
import reddit from './sub_reddit'

export default combineReducers({
  filterApp,
  todoApp,
  reddit,
})
