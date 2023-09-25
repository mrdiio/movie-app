'use client';
import { getMovieDetailService } from '@/services/getMovies';
import { useQuery } from 'react-query';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Cast from './Cast';

export default function MovieDetail({ id }) {
  const { data, isError, isLoading } = useQuery(
    ['movie', id],
    async () => await getMovieDetailService(id),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (isError) {
    return notFound();
  }

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex flex-col justify-center items-center gap-2">
          <h1>Loading Movie...</h1>
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <>
          <div
            className={`flex justify-center items-center bg-red-200 h-[50vh] hero bg-cover bg-center`}
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.backdrop_path}')`,
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
                      className="bg-cover rounded-md border border-gray-700 w-60"
                    />
                  </div>
                </div>
                <div className={`sm:col-span-9`}>
                  <div className="hidden sm:flex justify-center items-center h-full">
                    <div className="flex flex-col gap-2">
                      <div className="text-4xl  text-white">
                        <span className="font-semibold">{data?.title} </span>
                        <span className="">
                          ({data?.release_date?.slice(0, 4)})
                        </span>
                      </div>
                      <div className="flex flex-row items-center">
                        <p className="text-white font-medium text-base bg-yellow-500 px-3  rounded-xl">
                          {data?.runtime} min
                        </p>
                        <p className="text-white font-semibold text-xl mx-2">
                          •
                        </p>
                        <p className="text-white font-normal text-base">
                          {data.genres.map((genre) => genre.name).join(', ')}
                        </p>
                      </div>
                      <p className="text-white font-thin text-base italic">
                        &ldquo;{data?.tagline}&rdquo;
                      </p>
                      <div className="flex flex-col gap-1">
                        <span className="text-xl">Overview</span>
                        <p className="text-white font-thin text-base leading-relaxed">
                          {data?.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex sm:hidden container mx-auto p-8">
            <div className="flex sm:hidden justify-center items-center h-full">
              <div className="flex flex-col gap-2">
                <div className="text-4xl  text-white">
                  <span className="font-semibold">{data?.title} </span>
                  <span className="">({data?.release_date?.slice(0, 4)})</span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-white font-medium text-base bg-yellow-500 px-3 rounded-xl w-fit">
                    {data?.runtime} min
                  </p>
                  <p className="text-white font-normal text-base">
                    {data.genres.map((genre) => genre.name).join(', ')}
                  </p>
                </div>
                <p className="text-white font-thin text-base italic py-3">
                  &ldquo;{data?.tagline}&rdquo;
                </p>
                <div className="flex flex-col gap-1">
                  <span className="text-xl">Overview</span>
                  <p className="text-white font-thin text-base leading-relaxed">
                    {data?.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Cast id={id} />
        </>
      )}
    </>
  );
}
