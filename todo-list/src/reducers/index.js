import {combineReducers} from 'redux';

// import todoApp from './todo_list';
//
// export default combineReducers({
//   todoApp,
// })

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/actionTypes'

const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  console.log(action.type);

  switch (action.type) {
    // case SET_VISIBILITY_FILTER:
    //   console.log('set visibility');
    //   return Object.assign({}, state, {
    //     visibilityFilter: action.filter
    //   });

    case TOGGLE_TODO:
      console.log('toggle');
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })

    case ADD_TODO:
      console.log('ccc');
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]

    default:
      console.log('default');
      return state
  }
}

const todoApp = combineReducers({
  // visibilityFilter,
  todos
})

export default todoApp