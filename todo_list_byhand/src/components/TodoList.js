import React from 'react'

import Todo from './Todo'

const TodoList = ({dispatch, todo_list}) => {
  return (
    <div>
      <ul>
        {todo_list.map(function (todo) {
          return <Todo key={todo.id} content={todo}/>
        })}
      </ul>
    </div>
  )
}

export default TodoList
