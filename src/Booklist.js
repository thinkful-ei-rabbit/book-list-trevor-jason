import React from 'react';
import BookItem from './BookItem';

function Booklist (props) {
  return (
    <div className='book-list'>
      {props.books.map((book) =>
      <BookItem
        key={book.id}
        book={book}
      />
      )}
    </div>
  );
}

export default Booklist;