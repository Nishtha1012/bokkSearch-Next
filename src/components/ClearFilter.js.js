import React from "react";

const ClearFilter = ({ clearfilter }) => {
  return (
    <div
      className="bg-slate-200 inline-block p-3 rounded font-medium hover:cursor-pointer justify-end ms-10"
      onClick={clearfilter}
    >
      <div className="flex items-center">
        <span>Clear Filter</span>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg ms-2"
          viewBox="0 0 16 16"
          strokeWidth={2}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
    </div>
  );
};

export default ClearFilter;
