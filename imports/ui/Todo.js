import React from 'react';

import {todos} from './../api/todos';

export default class Todo extends React.Component {
  render() {
    return (
      <div key={this.props.todo._id}>
        <p>{this.props.todo.todo}</p>
      </div>
    );
  }
};

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired
}
