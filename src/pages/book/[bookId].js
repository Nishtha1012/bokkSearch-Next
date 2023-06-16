import React, { useState } from "react";
import client from "../../gql/apolloclient";
import { GET_BOOK } from "../../gql/queries";
import _ from "lodash";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const bookId = ({ book }) => {
  const [readMore, setreadMore] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/login");
  }
  return (
    <>
      {_.size(book) > 0 && (
        <>
          <Head>
            <title>Book | {book.volumeInfo.title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 pt-10 mx-auto">
              <div className="lg:w-4/5 mx-auto flex max-sm:flex-col">
                <div className="sticky mt-8 me-10 max-sm:mx-auto max-sm:mt-0">
                  <Image
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : ""
                    }
                    width={320}
                    height={384}
                    className="m-auto w-80 h-96 "
                    alt={book.volumeInfo.title}
                  />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {book.volumeInfo.title}
                  </h1>

                  <div className="mt-5">
                    <div className="grid grid-cols-2 my-1 py-2 border-b border-black">
                      <div className="text-sm title-font text-gray-700 tracking-widest font-bold">
                        Publisher
                      </div>
                      <div className="text-sm title-font text-gray-500 tracking-widest">
                        {book.volumeInfo.publisher}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 my-1 py-2 border-b border-black">
                      <div className="text-sm title-font text-gray-700 tracking-widest font-bold">
                        Author
                      </div>
                      <div className="text-sm title-font text-gray-500 tracking-widest">
                        {book.volumeInfo.authors
                          ? book.volumeInfo.authors[0]
                          : ""}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 my-1 py-2 border-b border-black">
                      <div className="text-sm title-font text-gray-700 tracking-widest font-bold">
                        Publish Date
                      </div>
                      <div className="text-sm title-font text-gray-500 tracking-widest">
                        {book.volumeInfo.publishedDate}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 my-1 py-2 border-b border-black">
                      <div className="text-sm title-font text-gray-700 tracking-widest font-bold">
                        Pages
                      </div>
                      <div className="text-sm title-font text-gray-500 tracking-widest">
                        {book.volumeInfo.pageCount}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 my-1 py-2 border-b border-black">
                      <div className="text-sm title-font text-gray-700 tracking-widest font-bold">
                        Version
                      </div>
                      <div className="text-sm title-font text-gray-500 tracking-widest">
                        {book.volumeInfo.contentVersion}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {book.volumeInfo.averageRating === null ? (
                      <span>Ratings : No ratings yet</span>
                    ) : (
                      <>
                        <span>Ratings: </span>
                        <ReactStars
                          count={5}
                          value={book.volumeInfo.averageRating}
                          size={20}
                          activeColor="#ffd700"
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          edit={false}
                        />
                        <span> ({book.volumeInfo.averageRating})</span>
                      </>
                    )}
                  </div>
                  {readMore ? (
                    <p
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: book.volumeInfo.description,
                      }}
                    />
                  ) : (
                    <p
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: book.volumeInfo.description
                          .slice(0, 200)
                          .concat("...."),
                      }}
                    />
                  )}
                  <span
                    className="text-blue-700 text-sm"
                    onClick={() => setreadMore(!readMore)}
                  >
                    {readMore ? "Read less" : "Read more"}
                  </span>
                  <div className="flex"></div>
                </div>
              </div>
            </div>
          </section>{" "}
        </>
      )}
    </>
  );
};

export default bookId;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  try {
    const { data } = await client.query({
      query: GET_BOOK,
      variables: {
        id: params.bookId,
      },
    });

    if (!data) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          book: data.bookByID,
        },
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
