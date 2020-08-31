import React from 'react';
import BookItem from './BookItem';

function Booklist (props) {
  // const newBookList = props.books.map((book) => {
  //   book = {
  //     title: book.volumeInfo.title,
  //     author: book.volumeInfo.authors[0],
  //     price: book.saleInfo.listPrice.amount,
  //     description: book.volumeInfo.description,
  //     image: book.volumeInfo.imageLinks.thumbnail
  //   }
  // })
  return (
    <div className='book-list'>
      {props.books.map((book) =>
      <BookItem 
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors[0]}
        price={book.saleInfo.listPrice.amount}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
      />
      )}
    </div>
  );
}

export default Booklist;