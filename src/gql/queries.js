import { gql } from "@apollo/client";

//to get all searched books
const GET_ALL_BOOKS = gql`
  query Query($term: String!, $start: Int!) {
    searchBooks(term: $term, start: $start) {
      id
      volumeInfo {
        title
        averageRating
        publishedDate
        publisher
        authors
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        saleability
        isEbook
      }
    }
  }
`;
//to get details of individual book
const GET_BOOK = gql`
  query BookByID($id: String!) {
    bookByID(id: $id) {
      volumeInfo {
        title
        description
        publisher
        authors
        publishedDate
        pageCount
        categories
        averageRating
        contentVersion
        language
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        saleability
        isEbook
      }
    }
  }
`;

//books by filter
const GET_BOOKS_BY_FILTER = gql`
  query BooksByFilter($term: String!, $filter: String!, $start: Int!) {
    booksByFilter(term: $term, filter: $filter, start: $start) {
      id
      volumeInfo {
        title
        description
        publisher
        authors
        publishedDate
        pageCount
        categories
        averageRating
        contentVersion
        language
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        saleability
        isEbook
      }
    }
  }
`;

//books by order
const GET_BOOKS_BY_ORDER = gql`
  query BooksByOrder($term: String!, $order: String!, $start: Int!) {
    booksByOrder(term: $term, order: $order, start: $start) {
      id
      volumeInfo {
        title
        description
        publisher
        authors
        publishedDate
        pageCount
        categories
        averageRating
        contentVersion
        language
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        saleability
        isEbook
      }
    }
  }
`;
export { GET_ALL_BOOKS, GET_BOOK, GET_BOOKS_BY_FILTER, GET_BOOKS_BY_ORDER };
