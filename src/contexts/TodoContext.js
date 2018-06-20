import React, { Component } from 'react'; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

import todoAPI from '../todoAPI';

const {Provider, Consumer} = React.createContext();

export default class TodoProvider extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   id: count++,
      //   body: "React 공부",
      //   complete: true
      // },
      // {
      //   id: count++,
      //   body: "Redux 공부",
      //   complete: false
      // }
    ]
  };
  
  async componentDidMount() {
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    this.setState({
      loading: true
    })
    const res = await todoAPI.get('/todos')
    this.setState({
      todos: res.data,
      loading: false
    }) 
  }

  createTodo = async newTodoBody => {
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      }
      this.setState({
        loading: true
      })
      await todoAPI.post('/todos', newTodo)
      await this.fetchTodos()
    }
  };

 deleteTodo = async (id, body) => {
   this.setState({
     loading: true
   });
   await todoAPI.delete(`todos/${id}`)
   await this.fetchTodos();
 }

 updateTodoBody = async id => {
    this.setState({
      loading: true
    })
    await todoAPI.patch(`/todos/${id}`, {
      complete : true
    })
    await this.fetchTodos();
  };

  completeTodo = async id => {
    this.setState({
      loading: true
    })
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    })
    await this.fetchTodos();
  }

  render() {
    const value = {
      todos : this.state.todos,
      loading: this.state.loading,
      fetchTodos : this.fetchTodos,
      createTodo : this.createTodo,
      deleteTodo : this.deleteTodo,
      updateTodoBody :this.updateTodoBody,
      completeTodo: this.completeTodo
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {TodoProvider, Consumer as TodoConsumer};