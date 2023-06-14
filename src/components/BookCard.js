import React from "react";
import _ from "lodash";
import Link from "next/link";
import Image from "next/image";

const BookCard = ({ book }) => {
  return (
    _.size(book) > 0 && (
      <div className="relative flex  flex-col rounded-xl bg-slate-200 bg-clip-border text-gray-700 shadow-xl my-3 w-72 mx-auto">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border text-gray-700">
          <Image
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : ""
            }
            alt={book.volumeInfo.title}
            className="w-40 h-52 mx-auto"
            width={160}
            height={208}
          />
        </div>
        <div className="p-6">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased mb-2">
            {book.volumeInfo.title}
          </p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Publisher : {book.volumeInfo.publisher}
          </p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Author : {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}
          </p>
        </div>
        <div
          className={
            "absolute items-center inline-block  text-white text-xs px-2 py-1 right-0 rounded-tr-lg rounded-bl-lg shadow-xl " +
            (book.saleInfo.saleability === "NOT_FOR_SALE"
              ? " bg-red-500"
              : "") +
            (book.saleInfo.saleability === "FOR_SALE" ? " bg-green-700" : "") +
            (book.saleInfo.saleability === "FOR_SALE_AND_RENTAL"
              ? " bg-yellow-600"
              : "")
          }
        >
          {book.saleInfo.saleability}
        </div>
        <Link href={`/book/${book.id}`}>
          <div className="p-6">
            <button
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none absolute bottom-4 right-2"
              type="button"
            >
              Read
            </button>
          </div>
        </Link>
      </div>
    )
  );
};

export default BookCard;
