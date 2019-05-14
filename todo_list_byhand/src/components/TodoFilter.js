import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

import { VISIBILITY_SHOW_ACTIVE, VISIBILITY_SHOW_ALL, VISIBILITY_SHOW_COMPLETED } from '../actions/actionTypes'

const TodoFilter = ({filterTodo}) => {
  return (
    <>
      <ButtonToolbar>
        <Button onClick={() => filterTodo(VISIBILITY_SHOW_ALL)} variant="primary">Show All</Button>
        <Button onClick={() => filterTodo(VISIBILITY_SHOW_COMPLETED)} variant="success">Completed</Button>
        <Button onClick={() => filterTodo(VISIBILITY_SHOW_ACTIVE)} variant="warning">Active</Button>
      </ButtonToolbar>
    </>
  )
}

export default TodoFilter
