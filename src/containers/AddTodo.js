import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, getNextTodoIdIfNeeded } from '../actions';
import TodoInput from '../components/TodoInput';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textInput: ''
    };
  }
  
  static propTypes = {
    todos: PropTypes.array.isRequired,
    nextTodoId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = nextProps;
    dispatch(getNextTodoIdIfNeeded());
  }

  handleChangeText = (e) => {
    textInput = e;
  }

  handlePress = () => {
    const { dispatch, todos, nextTodoId } = this.props;
    if (nextTodoId) {
      this.props.dispatch(addTodo(textInput, nextTodoId));
    }     
  }

  render() {
    return (
      <TodoInput onChangeText={this.handleChangeText} onPress={this.handlePress} />
    )
  }
}

const mapStateToProps = state => ({
   todos: state.todos,
   nextTodoId: state.nextTodoId,
})

export default connect(mapStateToProps)(AddTodo);
