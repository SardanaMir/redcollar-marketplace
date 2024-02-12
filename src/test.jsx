import { useState, useEffect } from 'react';

const UseInfiniteScroll = (fetchData) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const handleLoadMore = () => {
    if (!isFetchingMore && hasMore) {
      setIsFetchingMore(true);
      const nextPage = page + 1;
      setPage(nextPage);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        handleLoadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, isFetchingMore, hasMore]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(page);
        setHasMore(data.hasMore);
        setIsLoading(false);
        setIsFetchingMore(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchDataAndUpdateState();
  }, [fetchData, page]);

  return { isLoading, isFetchingMore, error, handleLoadMore };
};

export default UseInfiniteScroll;
