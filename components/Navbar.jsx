import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-800/50">
      <nav
        className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-0"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/">
            <span className="text-2xl text-gray-200 tracking-wide hover:text-yellow-400 transition duration-200">
              Movie App
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-10 tracking-widest">
          <Link
            href="/movie"
            className="text-sm font-medium hover:text-yellow-400 transition duration-200"
          >
            Now Playing
          </Link>
          <Link
            href="/movie"
            className="text-sm font-medium hover:text-yellow-400 transition duration-200"
          >
            Popular
          </Link>
          <Link
            href="/movie"
            className="text-sm font-medium hover:text-yellow-400 transition duration-200"
          >
            Top Rated
          </Link>
        </div>
      </nav>
    </header>
  );
}
