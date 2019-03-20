import React from 'react'

import FormAdd from './FormAdd'
import '../App.scss'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <FormAdd/>
        <VisibleTodoList/>
      </div>
    </div>
  )
}

export default App
