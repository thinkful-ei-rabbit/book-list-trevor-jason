import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Booklist from './Booklist';

class App extends Component {
  state = {
    books: [],
    error: null,
    loading: false,
    query: '',
    printType: null,
    bookType: null,
  }

  handleSearchSubmit = (event) => { 
    event.preventDefault();
    const searchTerms = `q=${event.target.search.value}`;
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
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
  
  handleSearchChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handlePrintType = (value) => {
    this.setState({
      printType: value
    });
  }

  handleBookType = (value) => {
    this.setState({
      bookType: value
    });
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <Search 
          handleSearchSubmit={this.handleSearchSubmit}
          handleBookType={this.handleBookType}
          handlePrintType={this.handlePrintType}
        />
        <Booklist 
          books={this.state.books}
        />
      </main>
    );
  }
}

export default App;