import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import data from "../data";
import SearchButton from './SearchButton';
import { BiSearchAlt } from 'react-icons/bi';
import axios from 'axios';

//pagination
import Pagination from './pagination';
//end pagination

//useContext + useReducer package
import { useSearchBoxContext } from '../context/searchbox_context';
//end useContext + useReducer

const SearchBox = () => {
  // const [keyWord, setKeyWord] = useState('');
  const [currentKeyWord, setCurrentKeyWord] = useState('');
  const [searchMoviesResult, setSearchMoviesResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  //useContext consumer
  const { keyWord, changeKeyword } = useSearchBoxContext();
  //end useContext

  const updateKeyWord = (e) => {
    const currentKeyWord = e.target.value;
    changeKeyword(currentKeyWord);
    // setKeyWord(currentKeyWord);
  };

  const fetchMovies = async (keyWord) => {
    const res = await axios.get(
      `/movies/key-word?keyWord=${keyWord}&page=${currentPage}`
    );
    setSearchMoviesResult(res.data.results);
    //setCurrentPage(res.data.page);
    setTotalPages(res.data.total_pages);
    setTotalResults(res.data.total_results);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setCurrentKeyWord(keyWord);
    setCurrentPage(1);
    fetchMovies(keyWord);
  };

  // Change page
  const Paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchMovies(currentKeyWord);
  }, [currentPage]);
  //end change page

  //reset button (clearSearch)
  const resetSearch = async () => {
    setSearchMoviesResult([]);
    // setKeyWord('');
    setCurrentKeyWord('');
    setTotalPages(0);
    setTotalResults(0);
  };
  //end reset button

  //condition for <<,<,>,>>
  const checkTotalPages = () => {
    if (keyWord !== '' && totalPages !== 0) {
      return (
        <>
          <Pagination
            totalPages={totalPages}
            paginate={Paginate}
            currentPagePag={currentPage}
          />
        </>
      );
    }
  };
  //end condition

  //condition for notes (search keyword,search result)
  const checkNotes = () => {
    if (keyWord !== '' && totalPages !== 0) {
      return (
        <Notes>
          <div className='notes'>
            <small> Search keyword: {keyWord}, </small>
            <small>total results: {totalResults}</small>
          </div>
        </Notes>
      );
    }
  };
  //end condition

  //end change Page

  return (
    <>
      <Wrapper className='section-center'>
        <form onSubmit={HandleSubmit}>
          <div className='form-control'>
            <BiSearchAlt />
            <input
              type='text'
              placeholder='Search ...'
              className='searchBox'
              onChange={updateKeyWord}
              value={keyWord}
            />
            <SearchButton keyWord={keyWord} />
            <button
              onClick={resetSearch}
              className={`${keyWord ? '' : 'disable-search-button'}`}
            >
              Clear Search
            </button>
          </div>
        </form>
      </Wrapper>
      {checkNotes()}
      <div />
      {searchMoviesResult.map((movie) => (
        <div key={movie.id} className='movie'>
          {movie.name || movie.title}
        </div>
      ))}
      {checkTotalPages()}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  padding-top: 0.5rem;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }
    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    //color: var(--clr-grey-5);
    font-weight: 400;
  }

  .disable-search-button {
    pointer-events: none;
    opacity: 0.4;
  }
`;

const Notes = styled.div`
  .notes {
    text-align: left;
  }
`;

export default SearchBox;
