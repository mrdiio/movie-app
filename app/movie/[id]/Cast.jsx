import Image from 'next/image';
import { useState } from 'react';
import CastCard from './CastCard';
import { useQuery } from 'react-query';
import { getMovieCreditService } from '@/services/getMovies';

export default function Cast({ id }) {
  const [cast, setCast] = useState([]);

  const { data, isLoading } = useQuery(
    ['cast', id],
    () => getMovieCreditService(id),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <div className="container mx-auto px-8 py-5">
      <div className="flex flex-col gap-5">
        <span className="text-2xl font-semibold text-yellow-500">Cast</span>

        <div className="grid grid-cols-3 sm:grid-cols-10 gap-5">
          {data?.cast?.map((item, i) => (
            <CastCard
              key={i}
              name={item.name}
              character={item.character || 'Unknown'}
              image={item.profile_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
