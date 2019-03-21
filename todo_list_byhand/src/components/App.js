import React from 'react'

import AddTodo from '../containers/AddTodo'
import '../App.scss'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <AddTodo/>
        <VisibleTodoList/>
      </div>
    </div>
  )
}

export default App
