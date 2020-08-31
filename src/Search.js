import React from 'react';
import SearchQuery from './SearchQuery';
import FilterQuery from './FilterQuery';


function Search(props) {

    return (
        <div className="search-container">
            <SearchQuery 
              handleSearchSubmit={props.handleSearchSubmit}
              handleSearchChange={props.handleSearchChange}
            />
            <FilterQuery 
              handleBookType={props.handleBookType}
              handlePrintType={props.handlePrintType}
            />
        </div>
    )
}

export default Search