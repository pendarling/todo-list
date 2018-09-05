import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Todos} from './../imports/api/todos';
import App from './../imports/ui/App';

Meteor.startup(function () {

  Tracker.autorun(() => {
    let todos = Todos.find().fetch();
      ReactDOM.render(<App todos={todos}/>, document.getElementById('app'));
  });
});
