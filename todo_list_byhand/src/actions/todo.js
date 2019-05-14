import { TODO_ADD, TODO_TOGGLE, TODO_FILTER } from './actionTypes'

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

export function filterTodo(filter) {
  return {
    type: TODO_FILTER,
    filter: filter,
  }
}
