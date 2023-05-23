"use client";
import React, { FC, useEffect } from "react";
import { fetchMovies } from "../utils/functions";
import { useStateValue } from "../context/contextProvider";
import { actionType } from "../context/reducer";
import Card from "./Card";

interface MoviesProps {}

const Movies: FC<MoviesProps> = ({}) => {
  const [{ movieItem, searchItem }, dispatch] = useStateValue();

  useEffect(() => {
    if (!movieItem) {
      fetchMovies().then((data) => {
        dispatch({
          type: actionType.SET_MOVIE_ITEM,
          movieItem: data,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return movieItem ? (
    movieItem.map((movie: any) => (
      <Card
        imageSrc={movie.Poster}
        mainText={movie.Title}
        key={movie.Title}
        id={movie.imdbID}
      />
    ))
  ) : (
    <p className="flex items-center justify-center">Loading.....</p>
  );
};

export default Movies;
