'use client';
import { useSearchParams } from 'next/navigation';
import SearchForm from '../components/SearchForm';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import {
  getMoviePopularService,
  getSearchMovieService,
} from '@/services/getMovies';
import MovieCard from '@/components/MovieCard';
import MovieCardSkeleton from '@/components/MovieCardSkeleton';
import { useInView } from 'react-intersection-observer';

export default function Search() {
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();

  const getInfinityScroll = useInfiniteQuery(
    ['searchInfinity'],
    async ({ pageParam = 1 }) =>
      await getSearchMovieService(pageParam, searchParams.get('q')),
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
    <div className="flex justify-center p-4">
      <div className="container">
        <SearchForm value={searchParams.get('q')} />

        <div className="pb-5">
          <span className="text-2xl font-semibold text-yellow-500">
            Search Results
          </span>

          <span className="text-gray-400 ml-2">
            for &ldquo;{searchParams.get('q')}&ldquo;
          </span>
        </div>

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
      </div>
    </div>
  );
}
