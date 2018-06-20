import React, {Component} from 'react'

export default class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const {onLogin} = this.props;
    onLogin(username, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>로그인페이지</h1>
        <label>
          아이디:
          <input type="text" name="username" ref="{this.usernameRef}" />
        </label>
        <label>
          비밀번호:
          <input type="password" name="password" ref="{this.passwordRef}" />
        </label>
        <button type="submit">로그인</button>
      </form>
    )
  }
}