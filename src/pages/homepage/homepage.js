import { React, Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import homepage from './homepage.css';

// components
import Card from '../../components/card/card';
import HomePageCarousel from '../../components/carousel/carousel';
import SearchBar from '../../components/searchBar/searchBar';
//actions
import {
  getMoviesForCarousel,
  getMovieData,
  getSearchData,
  deleteSearchData,
  deleteMovieData,
} from '../../actions/homepageAction';
import { bindActionCreators } from 'redux';
const StyledHeading = styled.p`
  font-size: 20px;
  font-weigh: 500;
`;
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  componentDidMount = () => {
    const key1 = 'tt0113497';
    const key2 = 'tt3896198';
    const key3 = 'tt0800369';
    const { getMovies, getMovieData } = this.props;
    getMovies();
    getMovieData(key1);
    getMovieData(key2);
    getMovieData(key3);
  };
  componentWillUnmount() {
    const { deleteMovieData, deleteSearchData } = this.props;
    deleteSearchData();
    deleteMovieData();
  }
  handleSearchInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    const { getSearchData } = this.props;
    if (search.length > 0) {
      getSearchData(search);
      this.props.history.push('/search');
    }
  };
  render() {
    const { movieData } = this.props;
    return (
      <div>
        <div className="col-md-6 offset-md-6 mt-2">
          <SearchBar
            value={this.state.search}
            handleSubmit={this.handleSubmit}
            handleSearchInput={this.handleSearchInput}
          />
        </div>
        <div className="container-fluid" style={{ marginTop: 20 }}>
          <HomePageCarousel />
        </div>
        <div className="container">
          {movieData.length > 0 ? (
            <p style={{ fontWeight: 500 }}>Now Showing</p>
          ) : null}
          <div className="row">
            {movieData.length > 0
              ? movieData.map((movie) => {
                  return (
                    <Card
                      poster={movie.Poster}
                      title={movie.Title}
                      plot={movie.Plot}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails,
    carouselData: state.movieData.carouselData,
    movieData: state.movieData.movieData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: bindActionCreators(getMoviesForCarousel, dispatch),
    getMovieData: bindActionCreators(getMovieData, dispatch),
    getSearchData: bindActionCreators(getSearchData, dispatch),
    deleteSearchData: bindActionCreators(deleteSearchData, dispatch),
    deleteMovieData: bindActionCreators(deleteMovieData, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
