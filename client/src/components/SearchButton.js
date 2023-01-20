import React from "react";

const SearchButton = ({ keyWord }) => {
  return (
    <button
      className={`${keyWord ? "" : "disable-search-button"}`}
      type="submit"
    >
      Search
    </button>
  );
};

export default SearchButton;
