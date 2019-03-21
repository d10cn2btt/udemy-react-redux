import { connect } from 'react-redux'

import FormAdd from '../components/FormAdd'
import { addTodo } from '../actions/todo'

// const mapDispatchToProps = dispatch => ({
//   submitForm: (content) => dispatch(addTodo(content))
// })

const mapDispatchToProps = {
  submitForm: addTodo,
}

const AddTodo = connect(null, mapDispatchToProps)(FormAdd)

export default AddTodo
