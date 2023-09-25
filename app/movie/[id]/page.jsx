import MovieDetail from './MovieDetail';

export const metadata = {
  title: 'Detail',
  description: 'Movie Detail',
};

export default function Detail({ params }) {
  return (
    <>
      <MovieDetail id={params.id} />
    </>
  );
}
