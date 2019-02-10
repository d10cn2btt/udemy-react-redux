import {commbineReducers} from 'redux';

import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/actionTypes';

const {SHOW_ALL} = VisibilityFilters;

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: [],
};

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

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }

        return todo;
      });
  }
}

function visibilifyFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

/**
 * Redux will call our reducer with an undefined state for the first time. This is our chance to return the initial state of our app
 * The reducer is a pure function that takes the previous state and an action, and returns the next state.
 * (previousState, action) => newState
 */
export default function todoApp(state = initialState, action) {
  // Each of these reducers is managing its own part of the global state.
  // he state parameter is different for every reducer, and corresponds to the part of the state it manages.
  // return {
  //   visibilifyFilter: visibilifyFilter(state.visibilityFilter, action),
  //   stores: stores(state.stores, action)
  // };

  switch (action.type) {
    // We don't mutate the `state`
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });

    case ADD_TODO:
      console.log('vcxxcv');
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      });

    // never assign to anything inside the state unless you clone it first.
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      });
    // We return the previous `state` in the default case. It's important to return the previous state for any unknown action.
    default:
      console.log('default');
      return state;
  }
}