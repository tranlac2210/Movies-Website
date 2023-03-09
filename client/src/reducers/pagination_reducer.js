import { GET_TOTAL_PAGES, GET_CURRENT_PAGE } from "../actions";
const pagination_reducer = (state, action) => {
  if (action.type === GET_TOTAL_PAGES) {
    return {
      ...state,
      totalPages: action.payload,
    };
  } else if (action.type === GET_CURRENT_PAGE) {
    console.log("reducer", action.payload)
    return {
      ...state,
      currentPage: action.payload,
    };
  } else {
    throw new Error("Invalid action.");
  }
};
export default pagination_reducer;
