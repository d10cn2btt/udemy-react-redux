import { createSelector } from 'reselect'
import { VISIBILITY_SHOW_ACTIVE, VISIBILITY_SHOW_ALL, VISIBILITY_SHOW_COMPLETED } from "../actions/actionTypes"

const getVisibilityFilter = state => state.filterTodo
const getTodos = state => state.todos

// https://redux.js.org/recipes/computing-derived-data#selectors-indexjs
export const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, filterTodo) => {
    console.log(todos);
    switch (filterTodo) {
      case VISIBILITY_SHOW_ACTIVE:
        return todos.filter(t => !t.completed)

      case VISIBILITY_SHOW_COMPLETED:
        return todos.filter(t => t.completed)

      case VISIBILITY_SHOW_ALL:
      default:
        return todos
    }
  }
)
