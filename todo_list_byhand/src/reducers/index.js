import { combineReducers } from 'redux'

import todos from './todos'
import filterTodo from './visibilityFilter'

export default combineReducers({
  todos,
  filterTodo
})
