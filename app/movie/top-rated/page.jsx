import MovieGrid from './MovieGrid';

export const metadata = {
  title: 'Top Rated',
  description: 'Top Rated',
};

export default function TopRated() {
  return (
    <>
      <div className="py-5 px-4 flex justify-center">
        <div className="container">
          <div className="mb-5">
            <span className="text-2xl font-semibold text-yellow-500">
              Top Rated Movies
            </span>
          </div>

          <MovieGrid />
        </div>
      </div>
    </>
  );
}
