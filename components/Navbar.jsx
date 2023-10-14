'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const menu = [
    {
      name: 'Now Playing',
      path: '/movie/now-playing',
    },
    {
      name: 'Popular',
      path: '/movie/popular',
    },
    {
      name: 'Top Rated',
      path: '/movie/top-rated',
    },
  ]

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
          {menu.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={`text-sm font-medium hover:text-yellow-400 transition duration-200
                ${
                  pathname === item.path
                    ? 'pb-1 border-b-2 border-yellow-500'
                    : ''
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
