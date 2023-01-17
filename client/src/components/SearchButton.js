import React from 'react';

const SearchButton = ({ keyWord }) => {
  return (
    <div>
      <button
        className={`${keyWord ? '' : 'disable-search-button'}`}
        type='submit'
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
