import React, { useContext, useReducer } from "react";
import reducer from "../reducers/searchbox_reducer";
import {
  SEARCH_KEYWORD,
  ADD_SEARCH_KEYWORD,
  CLEAR_SEARCH_KEYWORD,
  FETCH_MOVIES_BY_KEYWORD,
} from "../actions";

const initialState = {
  keyWord: "",
  currentKeyWord: "",
  searchMoviesResult: [],
  currentPage: 1,
};

const SearchboxContext = React.createContext();
export const SearchboxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeKeyword = (keyWord) => {
    dispatch({ type: SEARCH_KEYWORD, payload: keyWord });
    // dispatch({ type: SEARCH_KEYWORD, payload: {name: 'Giai', 'phone':} });
  };

  const fetchMoviesByKeyword = (searchMoviesResult) => {
    dispatch({
      type: FETCH_MOVIES_BY_KEYWORD,
      payload:  searchMoviesResult ,
    });
  };

  const addChangeKeyword = (
    currentKeyWord,
    currentPage,
    searchMoviesResult
  ) => {
    dispatch({
      type: ADD_SEARCH_KEYWORD,
      payload: { currentKeyWord, currentPage, searchMoviesResult },
    });
  };

  const clearKeyword = () => {
    dispatch({
      type: CLEAR_SEARCH_KEYWORD,
    });
  };

  return (
    <SearchboxContext.Provider
      value={{
        ...state,
        changeKeyword,
        addChangeKeyword,
        fetchMoviesByKeyword,
        clearKeyword,
      }}
    >
      {children}
    </SearchboxContext.Provider>
  );
};
// export default SearchboxProvider;
export const useSearchBoxContext = () => {
  return useContext(SearchboxContext);
};
