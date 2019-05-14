import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo'
import { getVisibleTodos } from '../selector'

// import { VISIBILITY_SHOW_ACTIVE, VISIBILITY_SHOW_ALL, VISIBILITY_SHOW_COMPLETED } from '../actions/actionTypes'
//
// function getVisibleTodos({todos, filterTodo}) {
//   console.log(todos);
//   switch (filterTodo) {
//     case VISIBILITY_SHOW_ACTIVE:
//       return todos.filter(t => !t.completed)
//
//     case VISIBILITY_SHOW_COMPLETED:
//       return todos.filter(t => t.completed)
//
//     case VISIBILITY_SHOW_ALL:
//     default:
//       return todos
//   }
// }

const mapStateToProps = state => ({
  todo_list: getVisibleTodos(state)
})

const mapDispatchToProps = {
  toggleTodo
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
