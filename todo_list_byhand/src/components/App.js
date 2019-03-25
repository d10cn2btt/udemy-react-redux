import React from 'react'

import AddTodo from '../containers/AddTodo'
import FilterTodo from '../containers/FilterTodo'
import '../App.scss'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <AddTodo/>
        <VisibleTodoList/>
        <FilterTodo/>
      </div>
    </div>
  )
}

export default App
