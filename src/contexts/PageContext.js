import React from 'react';

const {Provider, Consumer} = React.createContext();

class PageProvider extends React.Component {
  state = {
    page: 'login'
  }

  goToTodoPage = () => (
    this.setState({
      page: 'todo'
    })
  )

  render() {
    const value = {
      page: this.state.page,
      goToTodoPage: this.goToTodoPage
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {PageProvider, Consumer as PageConsumer};