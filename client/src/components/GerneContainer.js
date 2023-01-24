import Gerne from './Gerne';
// import React from 'react';
import Genres from '../genres-data';
import { useState, useEffect } from 'react';
import axios from "axios";



const GerneContainer = () => {
  const [type, setType] = useState("movie");
  const [myGenre, setGenre] = useState([]);
  // const [movie,setMovie] = useState([]);
  const [page,setPage] = useState(1);
  const [selectedGernes,setSelectedGenres] = useState([]);
  const fetchGenre = async (type) => {
    const res = await axios.get(
      `/movies/get-genre?type=${type}`
    );
    console.log(res);
    setGenre(res.data.genres);
  }
  const fetchMovie = async (selectedGernes,page) => {
    const res = await axios.get(
      `/movies/movie-genre?page=${page}&selectedGenres=${selectedGernes}`
    );
    console.log(res);
    setGenre(res.data.genres);
  }
  const handleClick = () => {
    setType("tv");
    fetchGenre(type);
    console.log(type);
  }

  useEffect(() => {
    fetchGenre(type);
  }, [type]);

  useEffect(()=>{
    fetchMovie(selectedGernes,page);
  },[selectedGernes])
  return (
    <section>
      {myGenre.map((genre) => {
        const { id } = genre;
        return <Gerne key={id} {...genre} onClick={handleClick} />;
      })}
    </section>
  );
};

export default GerneContainer;
