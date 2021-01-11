import { React } from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <div>
        <form className="d-flex" onSubmit={props.handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={props.value}
            name="search"
            onChange={props.handleSearchInput}
          />
          <button className="btn btn-outline-primary ml-2" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
