'use client'
import { getMoviePopularService } from '@/services/getMovies'
import { useState } from 'react'
import { useQuery } from 'react-query'
import SearchForm from './components/SearchForm'
import MovieCard from '@/components/MovieCard'
import MovieCardSkeleton from '@/components/MovieCardSkeleton'
import Slider from 'react-slick'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  const [page, setPage] = useState(1)
  const { data, isLoading } = useQuery(
    ['movieList'],
    async () => await getMoviePopularService(page),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  return (
    <div className="flex justify-center p-4">
      <div className="container">
        <div className="py-6">
          <div className="grid grid-cols-4 gap-4 py-2">
            <div className="group relative ">
              <div className="max-w-lg pb-[2px]">
                <Image
                  src="https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
                  alt="1"
                  width={300}
                  height={400}
                  className="relative bg-cover rounded-md"
                />

                <div className=" absolute bg-gray-900 rounded-b-md w-full opacity-0 flex p-2 flex-col gap-3 group-hover:opacity-100">
                  <div>
                    <Button>Detail</Button>
                  </div>
                </div>
              </div>

              <div className="rounded-md absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
              <div className="absolute bottom-0 p-3">Title</div>
            </div>

            <div className="group relative items-center rounded-md justify-center hover:scale-110 hover:slide-out-to-bottom-20">
              <div className="max-w-lg">
                <Image
                  src="https://image.tmdb.org/t/p/w500/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg"
                  alt="1"
                  width={300}
                  height={400}
                  className="w-full bg-cover rounded-t-md"
                />

                <div className="absolute bg-gray-900 rounded-b-md w-full opacity-0 flex p-2 flex-col gap-3 group-hover:opacity-100 delay-300 duration-75">
                  <div>Title</div>
                  <div>
                    <Button>Watch Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <h2> Single Item</h2>
          <Slider
            className="text-center"
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            infinite={true}
            autoplay={true}
            autoplaySpeed={1000}
            arrows={false}
          >
            <div className="w-full bg-slate-700">
              <h3>1</h3>
            </div>
            <div className="w-full bg-slate-700 ">
              <h3>2</h3>
            </div>
            <div className="w-full bg-slate-700 ">
              <h3>3</h3>
            </div>
            <div className="w-full bg-slate-700 ">
              <h3>4</h3>
            </div>
            <div className="w-full bg-slate-700">
              <h3>5</h3>
            </div>
            <div className="w-full bg-slate-700">
              <h3>6</h3>
            </div>
            <div className="w-full bg-slate-700">
              <h3>7</h3>
            </div>
            <div className="w-full bg-slate-700">
              <h3>8</h3>
            </div>
          </Slider> */}
          {/* <Slider
            className="text-center"
            // asNavFor={nav1}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            autoplay={true}
            autoplaySpeed={1000}
            appendDots={(dots) => <ul>{dots}</ul>}
          >
            {data?.results.map((item) => (
              <MovieCard item={item} key={item.id} withScroll={true} />
            ))}
          </Slider> */}
        </div>
        {/* <SearchForm /> */}
        <div className="flex flex-col bg-gray-800 p-4 gap-5 rounded-md">
          <span className="text-2xl font-semibold">Popular Movies</span>

          <div className="flex overflow-x-auto gap-4 rounded-md">
            {isLoading
              ? Array(10)
                  .fill()
                  .map((_, i) => (
                    <MovieCardSkeleton key={i} withScroll={true} />
                  ))
              : data.results.map((item) => (
                  <MovieCard item={item} key={item.id} withScroll={true} />
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}
