import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import data from "../data";
import SearchButton from './SearchButton';
import { BiSearchAlt } from 'react-icons/bi';
import axios from 'axios';

const SearchBox = () => {
  const [keyWord, setKeyWord] = useState('');
  const [searchMoviesResult, setSearchMoviesResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const updateKeyWord = (e) => {
    const currentKeyWord = e.target.value;
    setKeyWord(currentKeyWord);
  };

  const fetchMovies = async (keyWord) => {
    const res = await axios.get(
      `/movies/key-word?keyWord=${keyWord}&page=${currentPage}`
    );
    setSearchMoviesResult(res.data.results);
    setCurrentPage(res.data.page);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(keyWord);
  };

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
            />
            <SearchButton keyWord={keyWord} />
          </div>
        </form>
      </Wrapper>
      {searchMoviesResult.map((movie) => (
        <div key={movie.id} className='movie'>
          {movie.name || movie.title}
        </div>
      ))}
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
    color: var(--clr-grey-5);
    font-weight: 400;
  }

  .disable-search-button {
    pointer-events: none;
    opacity: 0.4;
  }
`;

export default SearchBox;
