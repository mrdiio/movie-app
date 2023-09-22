'use client';
import { getMovieDetailService } from '@/services/getMovies';
import { useQuery } from 'react-query';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function Detail({ params }) {
  const { data, isError, isLoading } = useQuery(
    ['movie', params.id],
    async () => await getMovieDetailService(params.id),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      onSuccess: (data) => {
        console.log(data);
        console.log(
          `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`
        );
      },
    }
  );

  if (isError) {
    return notFound();
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <div
        className={`flex justify-center items-center bg-red-200 h-[50vh] hero bg-cover bg-center`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}')`,
        }}
      >
        <div className="container mx-auto px-8 z-10">
          <div className="grid sm:grid-cols-12 gap-5">
            <div className="sm:col-span-3">
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
                  alt={data?.title}
                  width={300}
                  height={450}
                  className="object-cover rounded-md border border-gray-700 w-60"
                />
              </div>
            </div>
            <div className={`sm:col-span-9`}>
              <div className="hidden sm:flex justify-center items-center h-full">
                <div>
                  <h1 className="text-4xl font-bold text-white">
                    {data?.title}
                  </h1>
                  <div className="flex flex-row items-center">
                    <p className="text-white font-semibold text-xl">
                      {data?.vote_average}
                    </p>
                    <p className="text-white font-semibold text-xl mx-2">•</p>
                    <p className="text-white font-semibold text-xl">
                      {data?.release_date}
                    </p>
                  </div>
                  <p className="text-white font-semibold text-xl">
                    {data?.tagline}
                  </p>
                  <p className="text-white font-semibold text-xl">
                    {data?.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="flex sm:hidden justify-center items-center h-full">
          <div>
            <h1 className="text-4xl font-bold text-white">{data?.title}</h1>
            <div className="flex flex-row items-center">
              <p className="text-white font-semibold text-xl">
                {data?.vote_average}
              </p>
              <p className="text-white font-semibold text-xl mx-2">•</p>
              <p className="text-white font-semibold text-xl">
                {data?.release_date}
              </p>
            </div>
            <p className="text-white font-semibold text-xl">{data?.tagline}</p>
            <p className="text-white font-semibold text-xl">{data?.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
