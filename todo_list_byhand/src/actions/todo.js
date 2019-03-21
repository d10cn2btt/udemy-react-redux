import { TODO_ADD, TODO_TOGGLE } from './actionTypes'

export function addTodo(content) {
  return {
    type: TODO_ADD,
    content: content,
  }
}

export function toggleTodo(id) {
  return {
    type: TODO_TOGGLE,
    id: id,
  }
}
