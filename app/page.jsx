'use client'
import { getMoviePopularService } from '@/services/getMovies'
import { useState } from 'react'
import { useQuery } from 'react-query'
import SearchForm from './components/SearchForm'
import MovieCard from '@/components/MovieCard'
import MovieCardSkeleton from '@/components/MovieCardSkeleton'
import Slider from 'react-slick'

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
          <Slider
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
          </Slider>
        </div>
        <SearchForm />
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
