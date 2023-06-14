import React from "react";

const BackToTop = () => {
  return (
    <div
      className="fixed bg-indigo-600 p-3 inline-block rounded-full bottom-5 right-5 hover:cursor-pointer"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#fff"
        className="bi bi-arrow-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </div>
  );
};

export default BackToTop;
