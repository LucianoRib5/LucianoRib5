import React from 'react';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}