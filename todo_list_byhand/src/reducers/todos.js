import { TODO_ADD } from '../actions/actionTypes'

const initState = [
  {
    id: 1,
    name: 'btt',
  },
  {
    id: 2,
    name: 'abc',
  }
]

export default function addTodo(state = initState, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
      }

    default:
      return state
  }
}
