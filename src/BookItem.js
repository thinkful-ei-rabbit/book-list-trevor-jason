import React from 'react';

function BookItem ({ title, author, price, description, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <img src={image} alt={title}/>
        <div className="bookDetails">
          <p>{author}</p>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookItem;