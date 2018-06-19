import React, {Component} from "react";

import TodoContainer from '../containers/TodoContainer';
import {TodoProvider} from '../contexts/TodoContext';

export default class TodoPage extends Component {
  render() {
    return (
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    )
  }
}