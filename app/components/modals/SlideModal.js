'use client'
import { useStateValue } from '@/app/context/contextProvider';
import React from 'react';
import Image from "next/image";
import { actionType } from "@/app/context/reducer";
import { useRouter } from "next/navigation";

const SlideModal = ({ isOpen, onClose }) => {
  const overlayClasses = isOpen ? 'fixed inset-0 bg-black z-50' : 'hidden';
  const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden';
  const [{ modalShow,movieStream }, dispatch] = useStateValue();
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

  return (
    <div className={overlayClasses} onClick={onClose}>
      <div className={modalClasses}>
        <div className="bg-white rounded-lg p-8 transform transition-transform duration-300 ease-in-out shadow-lg">
          {/* Your modal content goes here */}
          <div className="flex justify-start m-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={onClose}>
  <path d="M9.71729 5L3.00021 12L9.71729 19" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="1" y1="-1" x2="16.7331" y2="-1" transform="matrix(1 0 0 -1 3.26709 11.0317)" stroke="#14142B" stroke-width="2" stroke-linecap="round"/>
  </svg>
          </div>
          <div>
          <div className="flex flex-col gap-6">
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
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SlideModal;
