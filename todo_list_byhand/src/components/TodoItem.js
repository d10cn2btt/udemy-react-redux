import React from 'react'

const TodoItem = ({todo, onClickToggle}) => {
  return (
    <li className={todo.completed ? 'completed' : 'not-completed'}>
      <span onClick={() => onClickToggle(todo.id)}>{todo.content}</span>
    </li>
  )
}

export default TodoItem
