//import Gerne from './Gerne';
// import React from 'react';
import Genres from '../genres-data';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Chip } from '@mui/material';



const GerneContainer = () => {
  const [type, setType] = useState("movie");
  const [myGenre, setGenre] = useState([]);
  // const [movie,setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const fetchGenre = async (type) => {
    const res = await axios.get(
      `/movies/get-genre?type=${type}`
    );
    setGenre(res.data.genres);
  }
  useEffect(() => {
    fetchGenre(type);
  }, [type]);

  const fetchMovie = async (selectedGenres, page) => {
    const res = await axios.get(
      // `/movies/get-genre?type=${type}`
      `/movies/movie-genre?page=${page}&selectedGenres=${selectedGenres}`
    );
    console.log(res);
    setSelectedGenres(res.data.genres);
  }

  useEffect(() => {
    fetchMovie(selectedGenres, page);
  }, [selectedGenres, page])

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenre(myGenre.filter((g) => g.id !== genre.id));
    setPage(1);
    console.log(genre);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenre([...myGenre, genre]);
    setPage(1);
  };
  return (
    <section>
      {selectedGenres && selectedGenres.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
          type="button"
          className='btn'
          color="primary"
          clickable
          onClick={() => handleRemove(genre)}
        />
        // const { id } = genre;
        // return <Gerne key={id} {...genre} />;
      ))}
      {myGenre.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
          type="button"
          className='btn'
          clickable
          onClick={() => handleAdd(genre)}
        />
        // const { id } = genre;
        // return <Gerne key={id} {...genre} />;
        ))}
    </section>
  );
};

export default GerneContainer;
