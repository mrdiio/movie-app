export default function SearchForm({ value }) {
  return (
    <>
      <div className="container mb-5 p-4 bg-gray-800 rounded-md">
        <form action="/search" className="flex flex-wrap justify-between gap-3">
          <div className="group relative flex-auto">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-yellow-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="bg-gray-600 focus:bg-gray-800 focus:ring-2 focus:ring-yellow-500 focus:outline-none appearance-none w-full text-sm leading-6 text-gray-200 placeholder-gray-400 focus:placeholder-gray-600 rounded-md py-2 pl-10 shadow-sm"
              type="text"
              name="q"
              aria-label="Filter movies"
              placeholder="Filter movies..."
              defaultValue={value}
              required
            />
          </div>
          <div className="flex w-full sm:w-auto">
            <button
              type="submit"
              className="w-full py-2 px-20 rounded-md bg-yellow-500 text-gray-700 font-semibold"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
