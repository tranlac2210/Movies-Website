import {
  SEARCH_KEYWORD,
  CLEAR_SEARCH_KEYWORD,
  ADD_SEARCH_KEYWORD,
} from '../actions';

const search_keyword_reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_KEYWORD:

      //   const { name, phone } = action.payload;
      return {
        ...state,
        keyWord: action.payload,
      };
    case ADD_SEARCH_KEYWORD:
      return {};
    case CLEAR_SEARCH_KEYWORD:
      return {};
    default:
      throw new Error('Invalid action.');
  }
};

export default search_keyword_reducer;
