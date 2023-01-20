import React, { useState, useReducer } from "react";
import styled from "styled-components";
import {
  MdFirstPage,
  MdNavigateBefore,
  MdNavigateNext,
  MdLastPage,
} from "react-icons/md";

const Pagination = ({ totalPages, paginate, currentPagePag }) => {
  const pageNumber = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <Nav>
      <div className="pagination">
        <button
          onClick={() => paginate(1)}
          className={`${currentPagePag === 1 ? "disable-button" : ""}`}
        >
          <MdFirstPage />
        </button>
        <button
          onClick={() => paginate(currentPagePag - 1)}
          className={`${currentPagePag === 1 ? "disable-button" : ""}`}
        >
          <MdNavigateBefore />
        </button>
        {pageNumber.map((number) => (
          <button
            onClick={() => paginate(number)}
            key={number}
            //href={`movies/key-words/page${number}`}
            className={`${currentPagePag === number ? "active" : ""} `}
            type="button"
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPagePag + 1)}
          className={`${currentPagePag === totalPages ? "disable-button" : ""}`}
        >
          <MdNavigateNext />
        </button>
        <button
          onClick={() => paginate(totalPages)}
          className={`${currentPagePag === totalPages ? "disable-button" : ""}`}
        >
          <MdLastPage />
        </button>
      </div>
    </Nav>
  );
};

//styling
const Nav = styled.div`
    .pagination {
        display:inline-block;
    };
    .pagination button {
        border: 1px solid #ddd;
        border-radius: 50%;
        color: black;
        float: left;
        margin: 10px 4px;
        max-width: 43px;
        padding 8px 16px;
        text-decoration:none;
        text-align: center;
        transition: background-color 0.3s;
          
    }
    .pagination button.active {
        background-color: #FF7F50 ;
        color: white;
        border: 1px solid #FF7F50;
        border-radius: 50% ;
    }
    .pagination button:hover:not(.active) {
        background-color: 	#FFE4B5;
    }
    .disable-button {
        pointer-events: none;
        opacity: 0.4;
      }
`;

export default Pagination;
