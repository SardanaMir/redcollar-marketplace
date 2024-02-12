import { useState, useEffect } from "react";
import { allProducts } from "../../api";
import {
  setItems
} from "../../redux/slices/paginationSlice";
import { useDispatch } from "react-redux";

const UseInfiniteScroll = (fetchData) => {
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  // const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      const nextPage = page + 10;
      setPage(nextPage);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        handleLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, isFetchingMore]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const data = await fetchData(page);
        dispatch(setItems(data));
        setIsFetchingMore(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };
    fetchDataAndUpdateState();
  }, [allProducts, page]);

  return { isFetchingMore, error, handleLoadMore };
};

export default UseInfiniteScroll;
