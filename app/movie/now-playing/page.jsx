import MovieGrid from './MovieGrid';

export const metadata = {
  title: 'Now Playing',
  description: 'Now Playing',
};

export default function NowPlaying() {
  return (
    <>
      <div className="py-5 px-4 flex justify-center">
        <div className="container">
          <div className="mb-5">
            <span className="text-2xl font-semibold text-yellow-500">
              Now Playing
            </span>
          </div>

          <MovieGrid />
        </div>
      </div>
    </>
  );
}
