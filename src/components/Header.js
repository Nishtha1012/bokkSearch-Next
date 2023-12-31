import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="text-gray-600 bg-white shadow-lg body-font top-0  sticky z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-row  items-center justify-between max-sm:py-0 max-sm:pt-2">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Books</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {session ? (
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 max-sm:mb-8 "
              onClick={() => signOut()}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          ) : (
            <>
              {" "}
              <Link href="/login" className="mr-5 hover:text-gray-900">
                Login
              </Link>
              <Link href="/signup" className="mr-5 hover:text-gray-900">
                Signup
              </Link>{" "}
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
