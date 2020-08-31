import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';

class App extends Component {
  
  render() {
    return (
      <main className='App'>
        <Header />
        <Search />
      </main>
    );
  }
}

export default App;