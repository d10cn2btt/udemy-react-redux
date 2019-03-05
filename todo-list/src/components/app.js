import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

/**
 * Để dễ dàng cho việc testing, chúng ta nên chia component ra làm hai phần, gồm container và presenter,
 * `container` sẽ làm nhiệm vụ connect với Redux,
 * trong khi `presenter` sẽ chỉ đơn giản là render, và chúng ta sẽ chỉ đơn giản là test trên presenter.
 */
const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export default App