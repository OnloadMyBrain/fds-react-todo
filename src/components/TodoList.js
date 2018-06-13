import React, { Component } from "react";

import TodoItem from "./TodoItem";


export default class TodoList extends Component {
  render() {
    //분해대입
    const { todos, onTodoComplete, onTodoDelete, onTodoBodyUpdate } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            onComplete={onTodoComplete}
            onDelete={onTodoDelete}
            onBodyUpdate={onTodoBodyUpdate}
          />
        ))}
      </ul>
    );
  }
}