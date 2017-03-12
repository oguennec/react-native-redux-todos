import TodoApi from '../api/mockTodoApi';

//let nextTodoId = 0;

const getNextTodoId = todos => ({
  type: 'GET_NEXT_TODO_ID',
  todos,
});

const shouldGetNextTodoId = (state) => {
  const todos = state.todos;
  const nextTodoId = state.nextTodoId;
  if (todos.length > 0 && nextTodoId >= 0) {
    const todosMaxId = Math.max(...todos.map(o => o.id));
    if (todosMaxId >= nextTodoId) {
      return true;
    }
    if (todosMaxId < todosMaxId) {
      return false;
    }
  }

};

export const getNextTodoIdIfNeeded = () => (dispatch, getState) => {
  if (shouldGetNextTodoId(getState())) {
    const nextTodos = getState().todos;
    return dispatch(getNextTodoId(nextTodos));
  }
};

export const addTodo = (text, nextTodoId) => ({
  type: 'ADD_TODO',
  id: nextTodoId,
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const loadTodosSuccess = todos => ({
  type: 'LOAD_TODOS_SUCCESS',
  todos,
});

export const getTodos = () => dispatch => {
  return TodoApi.getTodos()
                  .then(todos => {
                    dispatch(loadTodosSuccess(todos));
                  })
                  .catch(error => {
                    throw(error);
                  });
};
