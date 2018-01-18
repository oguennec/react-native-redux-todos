import * as React from 'react';
import { ListView, Text, View } from 'react-native';
import { List } from 'react-native-elements';
import Todo from './Todo';

export interface ITodoListProps {
  onTodoClick: (id: number) => any;
  todos: Array<{ completed: boolean; id: number; text: string }>;
}

export default class TodoList extends React.PureComponent<ITodoListProps> {
  constructor(props: ITodoListProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { onTodoClick, todos } = this.props;
    return (
      <List style={{ flexDirection: 'column', flex: 6, marginTop: 20 }}>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={this.onClick.bind(this, todo)}
          />
        ))}
      </List>
    );
  }

  private onClick = (todo: any) => {
    const { onTodoClick } = this.props;
    return onTodoClick(todo.id);
  };
}
