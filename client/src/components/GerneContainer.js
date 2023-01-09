import Gerne from './Gerne';
// import React from 'react';
import Genres from '../genres-data';
import { useState, useEffect } from 'react';

const GerneContainer = () => {
  const [myGenre, setGenre] = useState([]);

  useEffect(() => {
    setGenre(Genres);
  }, [myGenre]);

  return (
    <section>
      {myGenre.map((genre) => {
        const { id } = genre;
        return <Gerne key={id} {...genre} />;
      })}
    </section>
  );
};

export default GerneContainer;
