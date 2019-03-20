import { TODO_ADD } from './actionTypes'

export function addTodo(content) {
  return {
    type: TODO_ADD,
    content: content,
  }
}
