'use client';
import MovieCard from '@/components/MovieCard';
import MovieCardSkeleton from '@/components/MovieCardSkeleton';
import { getMovieNowPlayingService } from '@/services/getMovies';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

export default function MovieGrid() {
  const { ref, inView } = useInView();

  const getInfinityScroll = useInfiniteQuery(
    ['searchInfinity'],
    async ({ pageParam = 1 }) => await getMovieNowPlayingService(pageParam),
    {
      retry: false,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false,
    }
  );

  useEffect(() => {
    if (inView) {
      getInfinityScroll.fetchNextPage();
    }
  }, [inView, getInfinityScroll]);

  return (
    <div className="grid sm:grid-cols-10 grid-cols-4 gap-4 w-full">
      {getInfinityScroll.isLoading && (
        <>
          {Array(10)
            .fill()
            .map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
        </>
      )}

      {getInfinityScroll.data?.pages?.map((page) =>
        page.results.map((item) => (
          <div className="col-span-2" key={item.id}>
            <MovieCard item={item} />
          </div>
        ))
      )}

      {getInfinityScroll.hasNextPage && (
        <div className="col-span-full flex justify-center" ref={ref}>
          <button
            className="bg-yellow-500 text-gray-700 font-semibold py-2 px-20 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={() => getInfinityScroll.fetchNextPage()}
            disabled={getInfinityScroll.isFetchingNextPage}
          >
            {getInfinityScroll.isFetchingNextPage
              ? 'Loading more...'
              : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
