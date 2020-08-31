import React from 'react';

function BookItem (props) {
  return (
    <div>
      <h3>title</h3>
      <div>
        <img />
        <div className="bookDetails">
          <p>author</p>
          <p>price</p>
          <p>book description</p>
        </div>
      </div>
    </div>
  );
}

export default BookItem;