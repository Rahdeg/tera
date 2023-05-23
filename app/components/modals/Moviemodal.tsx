"use client";
import React, { FC, useCallback } from "react";
import Modal from "./Modal";
import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MoviemodalProps {}

const Moviemodal: FC<MoviemodalProps> = ({}) => {
  const [{ modalShow, movieStream }, dispatch] = useStateValue();
  const router = useRouter();

  const displayCart = () => {
    dispatch({
      type: actionType.SET_MODAL_SHOW,
      modalShow: !modalShow,
    });
  };

  const view = () => {
    displayCart();
    router.push(`/listings/${movieStream.imdbID}`);
  };

  const bodyContent = (
    <div className="flex flex-col gap-5">
      <div className="relative w-full xl:w-72 h-72 bg-gray-200 rounded-lg overflow-hidden shadow-md p-3">
        <Image
          src={movieStream?.Poster}
          alt="Card Background"
          className="w-full h-full object-cover"
          fill
        />
      </div>
      <p className=" text-2xl font-semibold text-black">{movieStream?.Title}</p>
      <p className=" text-black leading-tight "> {movieStream?.Plot}</p>
      <button
        type="submit"
        className="inline-flex items-center justify-center py-2.5 px-6 ml-2 text-sm font-medium text-white bg-[#5F2EEA] rounded-full border border-[#5F2EEA] hover:bg-[#5F2EEA] focus:ring-4 focus:outline-none focus:ring-[#5F2EEA] dark:bg-[#5F2EEA] dark:hover:bg-[#5F2EEA] dark:focus:ring-[#5F2EEA] mt-6"
        onClick={view}
      >
        Watch
      </button>
    </div>
  );

  return (
    <div>
      <Modal children={bodyContent} isOpen={modalShow} onClose={displayCart} />
    </div>
  );
};

export default Moviemodal;
