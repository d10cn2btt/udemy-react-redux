import { connect } from 'react-redux'

import TodoFilter from '../components/TodoFilter'
import { filterTodo } from '../actions/todo'


const mapDispatchToProps = {
  filterTodo
}

const FilterTodo = connect(null, mapDispatchToProps)(TodoFilter)

export default FilterTodo
