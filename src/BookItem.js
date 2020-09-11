import React from 'react';

function BookItem (props) {
  let price = 0;
 if (props.book.saleInfo.saleability === 'NOT_FOR_SALE') {
   price = 'Not for Sale'
 }
 else if (props.book.saleInfo.saleability === "FREE" || props.book.saleInfo.retailPrice.amount === 0) {
   price = 'FREE'
 }
 else {
   price = props.book.saleInfo.retailPrice.amount
 }
 

  console.log(props)
  return (
    <div>
      <h3>{props.book.volumeInfo.title}</h3>
      <div>
        <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title}/>
        <div className="bookDetails">
          <p>Author: {props.book.volumeInfo.authors}</p>
          <p>Price: 
            {price}
          </p>
          <p>{props.book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookItem;