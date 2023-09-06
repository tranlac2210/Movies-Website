import React, { useContext, useReducer } from "react";
import reducer from "../reducers/pagination_reducer";
import { GET_TOTAL_PAGES, GET_CURRENT_PAGE } from "../actions";

const initialState = {
  totalPages: 0,
  currentPage: 1,
};

const PaginationContext = React.createContext();
export const PaginationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTotalPages = (totalPages) => {
    dispatch({ type: GET_TOTAL_PAGES, payload: totalPages });
  };

  const getCurrentPage = (currentPage) => {
    dispatch({ type: GET_CURRENT_PAGE, payload: currentPage});
  };

  return (
    <PaginationContext.Provider
      value={{ ...state, getTotalPages, getCurrentPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

//export default Pagination
export const usePaginationContext = () => {
  return useContext(PaginationContext);
};
