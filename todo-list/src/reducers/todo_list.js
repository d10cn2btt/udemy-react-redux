import {combineReducers} from 'redux';

import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFilters} from '../actions/actionTypes';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ];

    // never assign to anything inside the state unless you clone it first.
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }

        return todo;
      });

    default:
      return state;
  }
}

/**
 * Redux will call our reducer with an undefined state for the first time. This is our chance to return the initial state of our app
 * The reducer is a pure function that takes the previous state and an action, and returns the next state.
 * (previousState, action) => newState
 *
 * Each of these reducers is managing its own part of the global state.
 * The state parameter is different for every reducer, and corresponds to the part of the state it manages.
 *
 * The store will pass two arguments to the reducer: the current state tree and the action
 * Note that a reducer is a pure function. It only computes the next state.
 * It should be completely predictable: calling it with the same inputs many times should produce the same outputs
 */

// const {SHOW_ALL} = VisibilityFilters;
//
// const initialState = {
//   visibilityFilter: SHOW_ALL,
//   todos: [],
// };
//
// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     // We don't mutate the `state`
//     case SET_VISIBILITY_FILTER:
//       return action.filter;
//
//     // We return the previous `state` in the default case.
//     // It's important to return the previous state for any unknown action.
//     default:
//       return state;
//   }
// }

export default combineReducers({
  // Move filter to file todo_filter.js
  // visibilityFilter,
  todos
});

// export default function todoApp(state = initialState, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }
