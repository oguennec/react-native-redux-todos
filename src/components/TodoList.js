import React from 'react';
import * as PropTypes from 'prop-types';
import { ListView, Text, View } from 'react-native';
import { List } from 'react-native-elements';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <List style={{flexDirection: 'column', flex: 6, marginTop: 20}}>
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
