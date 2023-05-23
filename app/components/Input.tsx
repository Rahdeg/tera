"use client";
import React, { ChangeEvent, FC, FormEvent } from "react";
import { useStateValue } from "../context/contextProvider";
import { actionType } from "../context/reducer";
import { searchMovies } from "../utils/functions";

interface InputProps {}

const InputForm: FC<InputProps> = ({}) => {
  const [{ searchItem, movieItem }, dispatch] = useStateValue();

  const onchange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: actionType.SET_SEARCH_ITEM,
      searchItem: event.target.value,
    });
  };

  const fetchData = async () => {
    await searchMovies(searchItem).then((data) => {
      dispatch({
        type: actionType.SET_MOVIE_ITEM,
        movieItem: data,
      });
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetchData();
    // Add your submit logic here
  };

  return (
    <form className="flex items-center w-full my-1">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder="Search"
          required
          onChange={onchange}
        />
      </div>
      <button
        type="submit"
        className=" hidden md:inline-flex items-center py-2.5 px-8 ml-2 text-sm font-medium text-white bg-[#5F2EEA] rounded-full border border-[#5F2EEA] hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-[#5F2EEA] dark:focus:ring-purple-800"
        onClick={handleSubmit}
      >
        Search
      </button>
      <button
        type="submit"
        className=" md:hidden p-2.5 ml-2 text-sm font-medium text-white bg-[#5F2EEA] rounded-lg border border-[#5F2EEA] hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-[#5F2EEA] dark:focus:ring-purple-800"
        onClick={handleSubmit}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default InputForm;
