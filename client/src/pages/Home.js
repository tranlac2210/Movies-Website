import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Pagination from "../components/pagination";
import { img_300 } from "../config/config_img"

const Home = () => {
  const [currentTrending, setCurrentTrending] = useState(1);
  const [movie, setMovie] = useState([]);

  const fetchTrendingMovies = async () => {
    const res = await axios.get(`/movies/trending?page=${currentTrending}`);

    setMovie(res.data.results);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, [currentTrending]);

  return (
    <Wrapper>
      <div>
        <span className='trendingToday'>Trending Today</span>
        {movie.map((movies) => {
          const { poster_path, title, name, first_air_date, 
            release_date, media_type, vote_average} = movies;
          return(
            <div className='media' key={movies.id}>
              <img
                className='image'
                src={`${img_300}/${poster_path}`} alt={title} 
              />
              <b className='title'>
                {title || name}
              </b>
              <span className='subTitle'>
                {media_type === "tv" ? "TV" : "Movie"}
              </span>
              <span className='subTitle'>
                {release_date || first_air_date}
              </span>
              {/* <span className='vote'>
                {vote_average}
              </span> */}
            </div>
          )
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .media {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 5px;
    margin: 5px 0;
    background-color: var(--clr-primary-5);
    border-radius: 10px;
    position: relative;
    font-family: "Montserrat", sans-serif;
  }

  .media:hover {
    background-color: hsl(185deg 56% 75%);
    color: black;
  }

  @media (max-width: 550px) {
    .media {
      width: 46%;
    }
  }

  .image {
    border-radius: 10px;
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 8px 0;
  }

  .subTitle {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3px;
    padding: 0 2px;
    padding-bottom: 3px;
  }
`;

export default Home;