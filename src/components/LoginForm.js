import React, {Component} from 'react'

import todoAPI from '../todoAPI';

export default class LoginForm extends Component {
  // state = {
  //   username: '',
  //   password: ''
  // }
  // usernameRef = React.createRef();
  // passwordRef = Reacte.createRef();

  // handleUsernameChange = e => {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

  // handlePasswordChange = e => {
  //   this.setState({
  //     password: e.target.value
  //   });
  // }

  // handleLoginClick = async e => {
  //   const {onLogin} = this.props;
  //   // onLogin(this.state.username, this.state.password);
  //   onLogin(this.usernameRef.current.value, this.passwordRef.current.value);
  // }

  handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const {onLogin} = this.props;
    onLogin(username, password);
  }

  render() {
    // const {onLogin} = this.props;
    // const {username, password} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>로그인페이지</h1>
        <label>
          아이디:
          {/* <input type="text" value={username} onChange={this.handleUsernameChange} /> */}
          <input type="text" name="username" ref="{this.usernameRef}" />
        </label>
        <label>
          비밀번호:
          {/* <input type="password" value={password} onChange={this.handlePasswordChange} /> */}
          <input type="password" name="password" ref="{this.passwordRef}" />
        </label>
        <button type="submit">로그인</button>
      </form>
    )
  }
} 