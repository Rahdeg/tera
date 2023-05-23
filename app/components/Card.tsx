"use client";
import Image from "next/image";
import qs from "query-string";
import React, { useCallback, useEffect } from "react";
import { useStateValue } from "../context/contextProvider";
import { actionType } from "../context/reducer";
import { useRouter } from "next/navigation";
import { fetchAMovie } from "../utils/functions";

interface CardProps {
  imageSrc: string;
  mainText: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, mainText, id }) => {
  const [{ modalShow, movieStream }, dispatch] = useStateValue();
  const router = useRouter();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    const updatedQuery: any = {
      ...currentQuery,
      listings: movieStream?.imdbID ? movieStream?.imdbID : "tt0077451",
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [router]);

  const fetchData = async () => {
    await fetchAMovie(id).then((data) => {
      dispatch({
        type: actionType.SET_MOVIE_STREAM,
        movieStream: data,
      });
    });
  };

  const displayCart = () => {
    fetchData();
    dispatch({
      type: actionType.SET_MODAL_SHOW,
      modalShow: !modalShow,
    });
    handleClick();
  };

  return (
    <div className="relative w-full xl:w-52 h-60 bg-gray-200 rounded-lg overflow-hidden shadow-md p-5">
      <Image
        src={imageSrc}
        alt="Card Background"
        className="w-full h-full object-cover"
        fill
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-6">
        <h2 className="text-white text-xl font-bold mb-2">{mainText}</h2>
        <button
          className="absolute bottom-6 left-16  md:left-10 xl:left-16 px-9 py-2 bg-gray-200 text-black rounded-full "
          onClick={displayCart}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
