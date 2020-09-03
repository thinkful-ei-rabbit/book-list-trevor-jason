import React from 'react';

function BookItem (props) {
  return (
    <div key={props.book.id}>
      <h3>{props.book.volumeInfo.title}</h3>
      <div>
        <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title}/>
        <div className="bookDetails">
          <p>{props.book.volumeInfo.authors}</p>
          <p>{props.book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookItem;