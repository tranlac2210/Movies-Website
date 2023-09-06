import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

//useContext + useReducer package
import { usePaginationContext } from "../context/pagination_context";
import { useSearchBoxContext } from "../context/searchbox_context";
//end the package

const Pagination = () => {
  //useContext consumer
  const { totalPages, getCurrentPage, currentPage } = usePaginationContext();
  const { totalResults } = useSearchBoxContext();

  const handlePageChange = (e) => {
    //console.log("&&" + currentPage);
    console.log("hPChange", e.selected + 1);
    getCurrentPage(e.selected + 1);
  };

  //console.log(totalResults);

  if (totalResults !== 0) {
    return (
      <Pag>
        <ReactPaginate
          nextLabel=" >"
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel="<"
          onPageChange={handlePageChange}
          forcePage={currentPage - 1}
          //onClick = {}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          //previousClassName="page-item"
          // previousLinkClassName="page-link"
          // nextClassName="page-item"
          // nextLinkClassName="page-link"
          breakLabel="..."
          // breakClassName="page-item"
          // breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </Pag>
    );
  }
};

//styling
const Pag = styled.div`
    .pagination {
        display:inline-block;
    };
    .pagination li {
      float: left;
    }
    .pagination a {
        border: 1px solid #ddd;
        border-radius: 50%;
        color: black;
        float: left;
        margin: 10px 4px;
        max-width: 50;
        padding 8px 16px;
        text-decoration:none;
        text-align: center;
        transition: background-color 0.3s;
          
    }
    .pagination a:hover {
      cursor: pointer;
      } 
      
    .pagination  li.active a{
        background-color: #FF7F50 ;
        color: white;
        border: 1px solid #c35700;
        border-radius: 50% ;
    }
    .pagination li:hover:not(.active) a{
        background-color: 	#FFE4B5;
    }
    .disable-a {
        pointer-events: none;
        opacity: 0.4;
      }
`;

export default Pagination;
