import React from 'react';

function FilterQuery(props) {
    return (
        <div className="filter-query">
            <label htmlFor="printType">Print Type:</label>
            <select name="printType" id="printType" onChange={(event) => props.handlePrintType(event.target.value)}>
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
            <label htmlFor="bookType">Book Type:</label>
            <select name="bookType" id="bookType" onChange={(event) => props.handleBookType(event.target.value)}>
                <option value="all">All</option>
                <option value="ebooks">ebooks</option>
                <option value="free-ebooks">Free ebooks</option>
                <option value="paid-ebooks">Paid ebooks</option>
                <option value="full">Full ebooks</option>
                <option value="partial">Partial ebooks</option>
            </select>
        </div>

    )
}

export default FilterQuery