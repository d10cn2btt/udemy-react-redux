import {combineReducers} from 'redux';

import {ADD_TODO, TOGGLE_TODO} from '../actions/actionTypes';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          commpleted: false,
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
 */

const todoApp = combineReducers({
  // Move filter to file todo_filter.js
  // visibilityFilter,
  todos
});

export default todoApp;

// export default function todoApp(state = initialState, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }