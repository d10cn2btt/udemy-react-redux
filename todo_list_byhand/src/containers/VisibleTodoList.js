import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo'

const mapStateToProps = state => ({
  todo_list: state.todos
})

const mapDispatchToProps = {
  toggleTodo
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
