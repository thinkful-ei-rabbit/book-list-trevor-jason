import React from 'react';
import SearchQuery from './SearchQuery';
import FilterQuery from './FilterQuery';


function Search(props) {

    return (
        <div className="search-container">
            <SearchQuery />
            <FilterQuery />
        </div>
    )
}

export default Search