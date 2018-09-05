import React from 'react';

import {Todos} from './../api/todos';

export default class AddTodo extends React.Component {
  hitSubmit(e) {
    let todo = e.target.todo.value;

    e.preventDefault();

    if (todo) {
      e.target.todo.value = '';

      Todos.insert({
        todo
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.hitSubmit.bind(this)}>
          <input type='text' name='todo' placeholder='Enter your todo'/>
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}
