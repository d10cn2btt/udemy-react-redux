import { connect } from 'react-redux'

import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todo_list: state.todos
})

const VisibleTodoList = connect(mapStateToProps)(TodoList)

export default VisibleTodoList
