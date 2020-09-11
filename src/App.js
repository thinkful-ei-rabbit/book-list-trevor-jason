import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Booklist from './Booklist';


class App extends Component {
  state = {
    books: [],
    error: null,
    query: '',
    printType: 'all',
    bookType: 'all'
  }


  handleSearchSubmit = (event) => { 
    event.preventDefault();
  
    const key = 'AIzaSyBAhLu0otRKl_zijvuS7IMkZOgEOfBLbZ0';
    let searchParams = ''
    
    if (this.state.bookType !== "all") {
     searchParams = new URLSearchParams({
      q: event.target.search.value,
      printType: this.state.printType,
      filter: this.state.bookType
    })
  }
     else {
    searchParams = new URLSearchParams({
      q: event.target.search.value,
      printType: this.state.printType,
    })
  }
  
    const url = `https://www.googleapis.com/books/v1/volumes?${searchParams}`;

    console.log(url)
    

    fetch(url,
      {method:'GET',
      headers: {'Authorization': key, 'Content-Type': 'application/json'}
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        return res;
      })
      .then(response => response.json())
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