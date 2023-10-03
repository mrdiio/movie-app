'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'
import { Clapperboard } from 'lucide-react'

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
    <header className="w-full">
      <nav
        className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-0"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/">
            <div className="flex items-center gap-1 hover:text-yellow-400 transition duration-200">
              <Clapperboard size={32} />
              <span
                className="text-2xl font-semibold 
                bg-gradient-to-r dark:from-yellow-200 dark:to-yellow-600 from-yellow-900 to-yellow-300  bg-clip-text text-transparent
              "
              >
                dMovie
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-10 tracking-widest items-center">
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
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
