import React from "react";
import { useForm } from "react-hook-form";

const SearchBar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="container mx-auto bg-slate-200 px-14 py-5 min-w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg px-2 py-1 mb-5 sticky mt-5">
          <input
            className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            type="text"
            placeholder="Search Books"
            {...register("term")}
          />

          <button
            type="submit"
            className="hover:bg-indigo-700 p-2 bg-indigo-600 cursor-pointer mx-2 rounded-full"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
