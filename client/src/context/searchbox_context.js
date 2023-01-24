import React, { useContext, useReducer } from "react";
import reducer from "../reducers/searchbox_reducer";
import {
  SEARCH_KEYWORD,
  ADD_SEARCH_KEYWORD,
  CLEAR_SEARCH_KEYWORD,
} from "../actions";

const initialState = {
  keyWord: "",
  currentKeyWord: "",
  searchMoviesResult: [],
  currentPage: 1,
  totalPages: 0,
  totalResults: 0,
};

function logger(reducer){
    return (prevState,action)=>{
        const nextState = reducer(prevState,action)
        console.groupEnd()
        return nextState
    }
};

const SearchboxContext = React.createContext();
const SearchboxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const changeKeyword = (keyword) =>{
    dispatch({type: SEARCH_KEYWORD, payload:keyword})
  };

  return (
  <SearchboxContext.Provider
    value = {{...state,changeKeyword}}
  >
    {children}
  </SearchboxContext.Provider>
  );
};
export default SearchboxProvider;
