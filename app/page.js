'use client';
import { getMoviePopularService } from '@/services/getMovies';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function Home() {
  const [page, setPage] = useState(1);
  const getMovies = useQuery(
    ['movieList'],
    () => getMoviePopularService(page),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
