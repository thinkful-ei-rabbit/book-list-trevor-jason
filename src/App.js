import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Booklist from './Booklist';

class App extends Component {
  state = {
    books: [],
    error: null,
    loading: false,
    searchTerms: {
      query: 'the chronicles of narnia',
      printType: 'books',
      bookType: 'partial'
    }
  }

  componentDidMount() {
    const searchTerms = `q=${this.state.searchTerms.query}+printType=${this.state.searchTerms.printType}+filter=${this.state.searchTerms.bookType}`;
    const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBAhLu0otRKl_zijvuS7IMkZOgEOfBLbZ0&${searchTerms}`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          book: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
  
  

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