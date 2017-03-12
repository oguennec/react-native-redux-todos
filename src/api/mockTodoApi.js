import delay from './delay';

const todos = [
  {
    id: 0,
    text: 'Dan Abramov YouTube on react-redux',
    completed: false,
  },
  {
    id: 1,
    text: 'redux todos example on github',
    completed: false,
  },

];

class TodoApi {
  static getTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos));
      }, delay);
    });
  }
}

export default TodoApi;
