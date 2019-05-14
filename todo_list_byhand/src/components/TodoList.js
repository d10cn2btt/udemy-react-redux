import React from 'react'

import TodoItem from './TodoItem'

const TodoList = ({todo_list, toggleTodo}) => {
  return (
    <div>
      <ul className='todo-list'>
        {todo_list.map(function (todo) {
          return <TodoItem key={todo.id} todo={todo} onClickToggle={toggleTodo}/>
        })}
      </ul>
    </div>
  )
}

export default TodoList
