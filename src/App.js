import React, { Component } from 'react'; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

// import {PageProvider, PageConsumer} from './contexts/PageContext';
import {UserProvider} from './contexts/UserContext';
// import {TodoProvider} from './contexts/TodoContext';

// class App extends Component {
//   render() {
//     return (
//       <PageProvider>
//         <UserProvider>
//           <PageConsumer>
//             {value => value.page === 'login' ? (
//               <LoginPage />
//             ) : (
//               <TodoPage />
//             )}
//           </PageConsumer>
//         </UserProvider>
//       </PageProvider>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route path="/login" component={LoginPage} />
          <Route path="/todo" render={() => <TodoPage title="My Title" />} />
          <Route exact path="/" component={Home} />
        </UserProvider>
      </BrowserRouter>
    )
  }
}

const Home = () => {
  if (localStorage.getItem('token')) {
    return <Redirect to="/todo" />;
  } else {
    return <Redirect to="/login" />;
  }
}

// const Home = () => (
//   localStorage.getItem('token') ? (
//     <Redirect to="/todo" />
//   ) : (
//     <Redirect to="/login" />
//   )
// )

export default App;