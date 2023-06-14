import React from "react";

const Filter = ({
  filters,
  handleFilterChange,
  showFilters,
  setshowFilters,
}) => {
  return (
    <div className="flex relative ms-10">
      <div
        className="bg-slate-200 inline-block p-3 rounded  hover:cursor-pointer justify-end "
        onClick={() => setshowFilters(!showFilters)}
      >
        <div className="flex items-center font-medium">
          <span>Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="font-bold ms-2"
            viewBox="0 0 16 16"
            strokeWidth={2}
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </div>
      {showFilters && (
        <div className="absolute z-50 bg-white top-11 rounded border shadow-xl w-28">
          {filters &&
            filters.map((filterr, index) => (
              <li
                class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-600 hover:text-white"
                key={index}
              >
                <button
                  onClick={(e) => handleFilterChange(e)}
                  id={filterr}
                  className="w-full"
                >
                  {filterr}
                </button>
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
