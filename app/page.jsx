'use client';
import { getMoviePopularService } from '@/services/getMovies';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from './loading';

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ['movieList'],
    async () => await getMoviePopularService(page),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  return (
    <div className="flex justify-center p-4">
      <div className="container">
        <div className="flex flex-col bg-gray-800 p-4 gap-5 rounded-md">
          <span className="text-2xl font-semibold">Popular Movies</span>

          <div className="flex overflow-x-auto gap-4 rounded-md">
            {isLoading
              ? Array(10)
                  .fill()
                  .map((_, i) => (
                    <div className="animate-pulse flex pb-4" key={i}>
                      <div className="inline-block">
                        <div className="max-w-lg w-40 sm:w-64">
                          <div className="rounded-md bg-slate-700 h-64 sm:h-96 w-40 sm:w-64"></div>
                        </div>

                        <div className="space-y-3 py-3">
                          <div className="h-3 bg-slate-700 rounded"></div>
                          <div className="h-3 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))
              : data?.results.map((item) => (
                  <Link
                    href={`movie/${item.id}`}
                    key={item.id}
                    className="flex pb-2"
                  >
                    <div className="inline-block">
                      <div className="max-w-lg w-40 sm:w-64">
                        <Image
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          alt={item.title}
                          width={500}
                          height={500}
                          priority
                          className="w-64 h-auto object-cover rounded-md"
                        />
                        <div className="py-2 px-1">
                          <span className="text-lg font-semibold">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
