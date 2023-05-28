"use client";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import Movies from "./Movies";
import { useStateValue } from "../context/contextProvider";
import Card from "./Card";
import { fetchAMovie, fetchMovies } from "../api/fetchMovies";
import { actionType } from "../context/reducer";

interface MoviePageProps {
  listingId: string;
}

const MoviePage: FC<MoviePageProps> = ({ listingId }) => {
  const [{ movieItem, movieStream }, dispatch] = useStateValue();
  const otherMovie = movieItem?.slice(0, 3);

  const fetchData = async () => {
    await fetchAMovie(listingId).then((data) => {
      dispatch({
        type: actionType.SET_MOVIE_STREAM,
        movieStream: data,
      });
    });
  };

  useEffect(() => {
    if (!movieStream) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  if (!movieStream) {
    <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2 p-10">
      <div className="flex flex-col md:flex-row items-start gap-16 w-full">
        <div className="relative w-full xl:w-72 h-60 bg-gray-200 rounded-lg overflow-hidden shadow-md p-3">
          <Image
            src={movieStream?.Poster}
            alt="Card Background"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div className="flex flex-col gap-8 ">
          <p className=" text-2xl font-semibold text-black">
            {movieStream?.Title}
          </p>
          <p className=" text-black leading-tight "> {movieStream?.Plot}</p>
          <div className=" flex items-center gap-6 md:gap-16 ">
            <div className=" flex items-center justify-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.9999"
                  cy="11"
                  r="9.16667"
                  stroke="#14142B"
                  stroke-width="2"
                />
                <path
                  d="M11 6.83333V11.8333L13.0833 13.9167"
                  stroke="#14142B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>23 Apr 2021</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.3078 1.4913C9.56444 0.87653 10.4354 0.876528 10.692 1.4913L12.3837 5.54377C12.4863 5.78946 12.7114 5.96236 12.9753 5.99807L17.4542 6.60427C18.1043 6.69227 18.3361 7.51376 17.8277 7.92857L14.3776 10.744C14.1562 10.9247 14.0567 11.2156 14.1211 11.4941L15.2237 16.2585C15.3787 16.9287 14.6252 17.4367 14.0621 17.0415L10.4308 14.4928C10.1722 14.3113 9.82763 14.3113 9.56906 14.4928L5.93768 17.0415C5.37465 17.4367 4.62106 16.9287 4.77613 16.2586L5.87859 11.4941C5.94303 11.2156 5.84355 10.9247 5.62208 10.744L2.17205 7.92857C1.66373 7.51375 1.89547 6.69227 2.54565 6.60427L7.02459 5.99807C7.28842 5.96236 7.51355 5.78946 7.61611 5.54377L9.3078 1.4913Z"
                  stroke="#14142B"
                  stroke-width="2"
                  stroke-miterlimit="3.3292"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>6.2</p>
            </div>
            <div className="hidden md:flex items-center justify-center gap-2">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16675 3.15537C1.16675 1.98811 2.44129 1.26814 3.44102 1.87066L11.4795 6.71528C12.4471 7.29845 12.4471 8.70154 11.4795 9.28472L3.44102 14.1293C2.44129 14.7319 1.16675 14.0119 1.16675 12.8446V3.15537Z"
                  stroke="#14142B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>1hr 50mins</p>
            </div>
          </div>
          <div className="flex md:hidden items-center justify-center gap-2">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16675 3.15537C1.16675 1.98811 2.44129 1.26814 3.44102 1.87066L11.4795 6.71528C12.4471 7.29845 12.4471 8.70154 11.4795 9.28472L3.44102 14.1293C2.44129 14.7319 1.16675 14.0119 1.16675 12.8446V3.15537Z"
                stroke="#14142B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>1hr 50mins</p>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-6 ml-2 text-sm font-medium text-white bg-[#5F2EEA] rounded-full border border-[#5F2EEA] hover:bg-[#5F2EEA]-800 focus:ring-4 focus:outline-none focus:ring-[#5F2EEA]-300 dark:bg-[#5F2EEA]-600 dark:hover:bg-[#5F2EEA] dark:focus:ring-[#5F2EEA]-800"
            >
              Watch Now
            </button>
            <div className="w-10 h-10 border  p-4 rounded-md relative bg-gray-300">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  d="M2.77216 2.77216C0.40928 5.13503 0.409282 8.96602 2.77216 11.3289L11.937 20.4937L12 20.4307L12.0631 20.4938L21.2279 11.329C23.5908 8.96609 23.5908 5.13511 21.2279 2.77223C18.865 0.409358 15.034 0.40936 12.6712 2.77224L12.3536 3.08978C12.1584 3.28505 11.8418 3.28505 11.6465 3.08978L11.3289 2.77216C8.96601 0.409281 5.13503 0.409282 2.77216 2.77216Z"
                  stroke="#2e44ea"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className=" text-xl font-bold text-black mt-10"> Similar Movies</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4 p-3">
        {otherMovie ? (
          otherMovie.map((movie: any) => (
            <Card
              imageSrc={movie.Poster}
              mainText={movie.Title}
              key={movie.Title}
              id={movie.imdbID}
            />
          ))
        ) : (
          <>Loading....</>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
