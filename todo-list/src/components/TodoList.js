import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo onClick={() => onTodoClick(index)} completed={todo.completed} text={todo.text} key={index}/>
    ))}
  </ul>
);

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       commpleted: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired,
// };

export default TodoList