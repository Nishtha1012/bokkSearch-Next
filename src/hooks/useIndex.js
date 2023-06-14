import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const useIndex = () => {
  const [searchQuery, setsearchQuery] = useState();

  const onSubmit = (data) => {
    console.log(data);
    setsearchQuery(data.term);
    const page = 1;
    searchBooks(data.term, page);
  };

  const { status } = useSession();
  const router = useRouter();

  const searchBooks = (searchQuery, page, filter) => {
    console.log(searchQuery, page);
    if (searchQuery && !filter) {
      router.push({ pathname: "/", query: { term: searchQuery, index: page } });
    }
    if (filter) {
      router.push({
        pathname: "/",
        query: { term: searchQuery, index: page, filter: filter },
      });
    }
  };

  const { term } = router.query;
  const { index } = router.query;
  const isFilter = router.query.filter;

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    if (filter) {
      searchBooks(term, value, filter);
    } else {
      searchBooks(term, value);
    }
    setPage(value);
  };

  let filters = ["ebooks", "free-ebooks", "paid-ebooks"];
  const [showFilters, setshowFilters] = useState(false);
  const [filter, setfilter] = useState();
  const handleFilterChange = (e) => {
    console.log(e.target.id);
    router.push({
      pathname: "/",
      query: { term: term, index: 1, filter: e.target.id },
    });

    setfilter(e.target.id);
    setshowFilters(false);
  };

  const clearfilter = () => {
    router.push({
      pathname: "/",
      query: { term: term, index: 1 },
    });
    setfilter();
  };

  return {
    status,
    onSubmit,
    page,
    handleChange,
    index,
    router,
    showFilters,
    filters,
    handleFilterChange,
    setshowFilters,
    isFilter,
    setfilter,
    clearfilter,
  };
};

export default useIndex;
