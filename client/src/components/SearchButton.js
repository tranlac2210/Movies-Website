import React, { useState } from 'react';
import axios from 'axios';

//useContext + useReducer package
import { useSearchBoxContext } from '../context/searchbox_context';
//end useContext + useReducer

const SearchButton = () => {
  // const [searchMoviesResult, setSearchMoviesResult] = useState([]);

  //useContext consumer
  const {
    keyWord,
    currentPage,
    currentKeyWord,
    fetchMoviesByKeyword,
    addChangeKeyword,
    clearKeyword,
  } = useSearchBoxContext();
  //end useContext

  const fetchMovies = async (keyWord) => {
    const res = await axios.get(
      `/movies/key-word?keyWord=${keyWord}&page=${currentPage}`
    );
    //console.log(res);
    fetchMoviesByKeyword(res.data.results);
    // setTotalPages(res.data.total_pages);
    // setTotalResults(res.data.total_results);
  };

  // const HandleSubmit = (e) => {
  //   console.log('dfasdf');
  //   e.preventDefault();
  //   addChangeKeyword(currentKeyWord, currentPage, keyWord);
  //   fetchMovies(keyWord);
  //   console.log('b');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    addChangeKeyword(currentKeyWord, currentPage);
    fetchMovies(keyWord);
  };

  const resetSearch = async () => {
    //setSearchMoviesResult([]);
    // setKeyWord('');
    clearKeyword();
    // setTotalPages(0);
    // setTotalResults(0);
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className={`${keyWord ? '' : 'disable-search-button'}`}
        type='submit'
      >
        Search
      </button>
      <button
        onClick={resetSearch}
        className={`${keyWord ? '' : 'disable-search-button'}`}
      >
        Clear Search
      </button>
      <div />
    </div>
  );
};

export default SearchButton;
