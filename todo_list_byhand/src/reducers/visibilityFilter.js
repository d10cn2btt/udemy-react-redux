import { TODO_FILTER, VISIBILITY_SHOW_ALL, } from '../actions/actionTypes'

export default function filterTodo(state = VISIBILITY_SHOW_ALL, action) {
  switch (action.type) {
    case TODO_FILTER:
      return action.filter

    default:
      return state
  }
}
