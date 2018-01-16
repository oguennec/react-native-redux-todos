import * as React from 'react';
import { ListView, Text, View } from 'react-native';
import { List } from 'react-native-elements';
import Todo from './Todo';

/**
 * PropTypes definition
 */
export interface Props {
  onTodoClick: (id: any) => any;
  todos: Array<{ completed: boolean; id: number; text: string }>;
}

const TodoList: React.StatelessComponent<Props> = ({ onTodoClick, todos }) => {
  return (
    <List style={{ flexDirection: 'column', flex: 6, marginTop: 20 }}>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </List>
  );
};

export default TodoList;
