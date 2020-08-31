import React from 'react';

function SearchQuery(props) {
    return (
        <form className="search-query">
            <label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" placeholder="Enter queries here." />
            <button type="submit" className="search-button">Search</button>   
        </form>
    )
}

export default SearchQuery