import {
  SEARCH_KEYWORD,
  CLEAR_SEARCH_KEYWORD,
  ADD_SEARCH_KEYWORD,
  FETCH_MOVIES_BY_KEYWORD,
} from "../actions";

const search_keyword_reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_KEYWORD:
      //   const { name, phone } = action.payload;
      return {
        ...state,
        keyWord: action.payload,
      };
    case FETCH_MOVIES_BY_KEYWORD:
      return {  
        ...state,
        totalResults: action.payload.totalResults,
        searchMoviesResult: [...action.payload.searchMoviesResult],
      };
    case ADD_SEARCH_KEYWORD:
      return {
        ...state,
        currentKeyWord: state.keyWord,
        //currentPage: 1,
      };
    case CLEAR_SEARCH_KEYWORD:
      return {
        ...state,
        keyWord: "",
        currentKeyWord: "",
        searchMoviesResult: [],
        currentPage: 1,
        totalResults: -1,
      };
    default:
      throw new Error("Invalid action.");
  }
};

export default search_keyword_reducer;
