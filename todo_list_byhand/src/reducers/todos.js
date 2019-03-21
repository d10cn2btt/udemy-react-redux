import { TODO_ADD, TODO_TOGGLE } from '../actions/actionTypes'

const initState = [
  {
    id: 1,
    completed: true,
    content: 'btt',
  },
  {
    id: 2,
    completed: false,
    content: 'abc',
  }
]

export default function addTodo(state = initState, action) {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          content: action.content
        }
      ]

    case TODO_TOGGLE:
      return state.map(todo => (
        action.id === todo.id ? {...todo, completed: !todo.completed} : todo
      ))

    default:
      return state
  }
}
