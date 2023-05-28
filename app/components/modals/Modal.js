import React from 'react';
import styles from "../../styles/movie.module.css";
const Modal = ({ isOpen, onClose, children }) => {
  
  if (!isOpen) {
    return null;
  }
  
  return (
    <div
      className={`fixed right-0 top-0 bottom-0 flex h-full w-72 z-50 ${
        isOpen ? 'transition-opacity duration-300 ease-in opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white w-full max-w-lg rounded-lg p-6 transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-start">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={onClose}>
<path d="M9.71729 5L3.00021 12L9.71729 19" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="1" y1="-1" x2="16.7331" y2="-1" transform="matrix(1 0 0 -1 3.26709 11.0317)" stroke="#14142B" stroke-width="2" stroke-linecap="round"/>
</svg>
        </div>
        <div className="mb-4 mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
