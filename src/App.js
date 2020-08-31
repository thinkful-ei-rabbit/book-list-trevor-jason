import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Booklist from './Booklist';

class App extends Component {
  
  render() {
    return (
      <main className='App'>
        <Header />
        <Search />
        <Booklist />
      </main>
    );
  }
}

export default App;