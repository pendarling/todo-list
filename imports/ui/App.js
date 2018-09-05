import React from 'react';

import TitleBar from './TitleBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title='Todo List'/>
        <TodoList todos={this.props.todos} />
        <AddTodo/>
      </div>
    );
  }
};
