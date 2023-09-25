import MovieGrid from './MovieGrid';

export const metadata = {
  title: 'Popular',
  description: 'Popular',
};

export default function Popular() {
  return (
    <>
      <div className="py-5 px-4 flex justify-center">
        <div className="container">
          <div className="mb-5">
            <span className="text-2xl font-semibold text-yellow-500">
              Popular Movies
            </span>
          </div>

          <MovieGrid />
        </div>
      </div>
    </>
  );
}
