import React from 'react';

import {Redirect} from 'react-router-dom';

export default function(redirectPath){ // HOC를 반환하는 함수
  return function(WrappedComponent){
    return class extends React.Component {
      render(){
        if(localStorage.getItem('token')){
          return <WrappedComponent {...this.props} />
        } else {
          return <Redirect to={redirectPath} />
        }
      }
    }
  }
}