import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
  renderTodos() {
    return this.props.todos.map((todo) => {
      return <Todo key={todo._id} todo={todo} />;
    });
  }
  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}
