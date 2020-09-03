import React from 'react';

function BookItem (props) {
  return (
    <div key={props.book.id} className="bookDetails-item">
      <h3>{props.book.volumeInfo.title}</h3>
      <div className="bookDeatils-containter">
        <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title}/>
        <div className="bookDetails">
          <p>Author: {props.book.volumeInfo.authors}</p>
          <p>Price: {(props.book.saleInfo.saleability === 'NOT_FOR_SALE') ? 'Not for Sale' : `$ ${props.book.saleInfo.retailPrice.amount}`}</p>
          <p className="description">{props.book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookItem;