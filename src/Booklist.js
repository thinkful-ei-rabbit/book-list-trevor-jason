import React from 'react';
import BookItem from './BookItem';

function Booklist (props) {

  return (
    <div className='book-list'>
      {props.books.map(item =>
      <BookItem
        key={item.id}
        book={item}
      />
      )}
    </div>
  );
}

export default Booklist;