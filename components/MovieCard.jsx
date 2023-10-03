import Image from 'next/image'
import Link from 'next/link'

export default function MovieCard({ item, withScroll = false }) {
  return (
    <div key={item.id} className="flex pb-2 justify-center">
      <div className="inline-block">
        <div className={`max-w-lg sm:w-64 ${withScroll ? 'w-40' : null}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
            width={500}
            height={500}
            priority
            className={`w-64 h-auto object-cover rounded-md ${
              !withScroll ? 'border border-gray-700' : null
            }`}
          />
          <div className="py-2 px-1">
            <Link href={`/movie/${item.id}`} className="text-lg font-semibold">
              {item.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
