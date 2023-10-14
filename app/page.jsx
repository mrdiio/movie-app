'use client';
import { getMoviePopularService } from '@/services/getMovies';
import { useState } from 'react';
import { useQuery } from 'react-query';
import SearchForm from './components/SearchForm';
import MovieCard from '@/components/MovieCard';
import MovieCardSkeleton from '@/components/MovieCardSkeleton';

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ['movieList'],
    async () => await getMoviePopularService(page),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="flex justify-center p-4">
      <div className="container">
        <SearchForm />
        <div className="flex flex-col bg-gray-800 p-4 gap-5 rounded-md">
          <span className="text-2xl font-semibold">Popular Movies</span>

          <div className="flex overflow-x-auto gap-4 rounded-md">
            {isLoading
              ? Array(10)
                  .fill()
                  .map((_, i) => (
                    <MovieCardSkeleton key={i} withScroll={true} />
                  ))
              : data?.results.map((item) => (
                  <MovieCard item={item} key={item.id} withScroll={true} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
