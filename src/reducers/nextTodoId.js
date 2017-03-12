
const nextTodoId = (state = 0, action) => {
  switch (action.type) {
    case 'GET_NEXT_TODO_ID':
      return 1 + Math.max(...action.todos.map(o => o.id));
    default:
      return state;
  }
};

export default nextTodoId;