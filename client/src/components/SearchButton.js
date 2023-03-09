import React, { useEffect } from "react";
import axios from "axios";

//useContext + useReducer package
import { useSearchBoxContext } from "../context/searchbox_context";
import { usePaginationContext } from "../context/pagination_context";
//end useContext + useReducer

const SearchButton = () => {
  //useContext consumer
  const {
    keyWord,
    currentKeyWord,
    fetchMoviesByKeyword,
    addChangeKeyword,
    clearKeyword,
  } = useSearchBoxContext();

  const { getTotalPages, currentPage, getCurrentPage } = usePaginationContext();

  //end useContext

  const fetchMovies = async (keyWord) => {
    //getCurrentPage(1);
    console.log("fMovies", currentPage);
    const res = await axios.get(
      `/movies/key-word?keyWord=${keyWord}&page=${currentPage}`
    );
    //console.log(res);
    //console.log(res.data.page +  " & " + currentPage);
    fetchMoviesByKeyword(res.data.total_results, res.data.results);
    getTotalPages(res.data.total_pages);
    
  };

  useEffect(() => {
    if (currentKeyWord !== "") {
      console.log("inside useEffect");
      fetchMovies(currentKeyWord);
    }
  }, [currentKeyWord,currentPage]);

  // useEffect(()=>{
  //   fetchMovies(currentKeyWord);
  // },[currentPage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hSubmit", currentPage);
    getCurrentPage(1);
    addChangeKeyword(currentKeyWord);
    console.log("inside hSubmit")
    //fetchMovies(keyWord);
    
  };

  const resetSearch = async (e) => {
    e.preventDefault();
    clearKeyword();
    getTotalPages(0);
    getCurrentPage(1);
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className={`${keyWord ? "" : "disable-search-button"}`}
        type="submit"
      >
        Search
      </button>
      <button
        onClick={resetSearch}
        className={`${keyWord ? "" : "disable-search-button"}`}
      >
        Clear Search
      </button>
      <div />
    </div>
  );
};

export default SearchButton;
