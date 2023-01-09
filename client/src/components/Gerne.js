import React, { useState } from "react";
import Genres from "../genres-data";
import { useEffect } from "react";
import Chip from "@material-ui/ore/Chip";

function Genre() {
  const [myGenre, setGenre] = useState([]);
  useEffect(() => {
    setGenre(Genres);
  }, []);
  return (
    <div>
      {
        myGenre.map((data, index) => {
          const { name } = data;
          return (
              <p>{name}</p>
          );
        })

        /* {myGenre.map((data, index) => {
        const { name } = data;
        return (
          <div>
            {name}
          </div>
        );
      })} */
      }
    </div>
  );
}
export default Genre;
