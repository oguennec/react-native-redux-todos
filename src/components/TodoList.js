import React, { PropTypes } from 'react';
import { ListView, Text, View } from 'react-native';
import { List } from 'react-native-elements';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (

  <List style={{flexDirection: 'row'}}>
    {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} /> )}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
