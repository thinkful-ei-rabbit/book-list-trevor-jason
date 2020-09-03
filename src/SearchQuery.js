import React from "react";

function SearchQuery(props) {
  return (
    <div className="query-container">
      <form
        className="search-query"
        onSubmit={(event) => props.handleSearchSubmit(event)}
      >
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter queries here."
          onChange={(event) => props.handleSearchChange(event)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchQuery;
