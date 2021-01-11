import { React, useState, useEffect } from 'react';
import Card from '../../components/card/card';
import { connect } from 'react-redux';

// components
import SearchBar from '../../components/searchBar/searchBar';

//utils
import { stringConstants } from '../../utils/stringConstants';

//actions
import { getSearchData, deleteSearchData } from '../../actions/homepageAction';
import { bindActionCreators } from 'redux';
const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const { searchData } = props;
  const { MOVIE_NOT_FOUND } = stringConstants;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.length > 0) {
      props.deleteSearchData();
      props.getSearchData(searchValue);
    }
  };

  const handleSearchInput = (e) => {
    const { name, value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="container">
      <div className="col-md-6 offset-md-7 mt-2">
        <SearchBar
          value={searchValue}
          handleSubmit={handleSubmit}
          handleSearchInput={handleSearchInput}
        />
      </div>
      {searchData.length > 0 && Object.keys(searchData[0]).length > 2 ? (
        searchData.map((data) => {
          // <Card poster={data.Poster} title={data.title} plot={data.Plot} />;
          return (
            <div>
              <Card poster={data.Poster} title={data.Title} plot={data.Plot} />
            </div>
          );
        })
      ) : (
        <h3 style={{ textAlign: 'center', marginTop: 200 }}>
          {MOVIE_NOT_FOUND}
        </h3>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchData: state.movieData.searchData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSearchData: bindActionCreators(getSearchData, dispatch),
    deleteSearchData: bindActionCreators(deleteSearchData, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
