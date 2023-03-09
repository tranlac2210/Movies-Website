import React from "react";
import styled from "styled-components";
//import data from "../data";
import SearchButton from "./SearchButton";
import { BiSearchAlt } from "react-icons/bi";

//pagination
// import Pagination from "./pagination";
//end pagination

//useContext + useReducer package
import { useSearchBoxContext } from "../context/searchbox_context";
import { usePaginationContext } from "../context/pagination_context";
//end useContext + useReducer

const SearchBox = () => {
  // const [keyWord, setKeyWord] = useState('');
  //const [currentKeyWord, setCurrentKeyWord] = useState("");
  //const [currentPage, setCurrentPage] = useState(1);
  //const [searchMoviesResult, setSearchMoviesResult] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  // const [totalResults, setTotalResults] = useState(0);

  //useContext consumer
  const {
    keyWord,
    currentKeyWord,
    totalResults,
    searchMoviesResult,
    changeKeyword,
  } = useSearchBoxContext();

  // const {
  //   currentPage,
  // }
  // = usePaginationContext();
  // //end useContext

  const updateKeyWord = (e) => {
    const tempKeyword = e.target.value;
    changeKeyword(tempKeyword);
  };

  // // Change page
  // const Paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // useEffect(() => {
  //   fetchMovies(currentKeyWord);
  // }, [currentPage]);
  //end change page

  // //condition for <<,<,>,>>
  // const checkTotalPages = () => {
  //   if (keyWord !== "" && totalPages !== 0) {
  //     return (
  //       <>
  //         <Pagination
  //           totalPages={totalPages}
  //           paginate={Paginate}
  //           currentPagePag={currentPage}
  //         />
  //       </>
  //     );
  //   }
  // };
  // //end condition

  // //condition for notes (search keyword,search result)
  const checkNotes = () => {
    // console.log(currentKeyWord + " & " + totalResults);
    //console.log(currentPage);
    if (currentKeyWord !== "" && totalResults !== -1 && totalResults !== 0) {
      return (
        <Notes>
          <div className="notes">
            <small> Search keyword: {currentKeyWord}, </small>
            <small>total results: {totalResults}</small>
          </div>
        </Notes>
      );
    } else if (currentKeyWord !== "" && totalResults === 0) {
      return (
        <Notes>
          <div className="notes">
            <small>No matching result!!!</small>
          </div>
        </Notes>
      );
    }
  };
  // //end condition for notes

  //end change Page

  return (
    <>
      <Wrapper className="section-center">
        <form>
          <div className="form-control">
            <BiSearchAlt />
            <input
              type="text"
              placeholder="Search ..."
              className="searchBox"
              onChange={updateKeyWord}
              value={keyWord}
            />
            <SearchButton />
          </div>
        </form>
      </Wrapper>
      {checkNotes()}
      <div />
      {searchMoviesResult.map((movie) => (
        <div key={movie.id} className="movie">
          {movie.name || movie.title}
        </div>
      ))}
      {/* <Pagination /> */}
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
