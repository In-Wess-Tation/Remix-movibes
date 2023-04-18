import { useLoaderData } from "@remix-run/react";

import Header from "../components/Header";


import movieCollage from "../svg'er/movieCollage.svg"
import joker from "../svg'er/joker.svg"
import topGun from "../svg'er/topGun.svg"
import Adventure from "../svg'er/adventure.svg"
import Drama from "../svg'er/drama.svg"
import Popular from "../svg'er/popular.svg"
import Fav from "../svg'er/fav.svg"


let imgPath ="https://image.tmdb.org/t/p/original"
let APIKey = "8aae96e730d41065f7cfa804530c488a"

export const loader = async({params}) => {
  let result = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${APIKey}&language=en-US`)
  return result.json();
}

export const detail = () => {
  return [{ title: "Movie Details" }];
};

export default function Index() {

  let movies = useLoaderData();
  console.log(movies)

return (
  <section className="flex bg-dark">
    <div className="w-1/8">
    <Header />
    </div>

    <section className="pl-10 pr-10 text-white">

      <article className="pt-16 pb-10">
        <div><img className="rounded-3xl object-cover h-72 w-screen" src={imgPath + movies.poster_path} alt={movies.poster_path} /></div>
      </article>

      <article className="flex gap-12">

        <article>
        <div className="flex gap-5 text-2xl pb-5">
            <p>{movies.title}</p>
            <p>{movies.release_date}</p>
            {movies.adult === false ? <p>PG-13</p> : movies.adult === true ? <p>PG-13 <BsDot className="dot"/></p> : null}
            <p>{movies.runtime}m</p>
            <p className="text-grey border-2 border-grey rounded-3xl text-base pl-2 pr-2">Genre</p>
            <p className="text-grey border-2 border-grey rounded-3xl text-base pl-2 pr-2">Genre</p>
        </div>

        <div className="text-xl ">
            <p>{movies.overview}</p>
        </div>

        <div className="text-xl pt-5 leading-10">
          <p className="border-b-2 border-t-2 border-grey pt-2 pb-2">Director: </p>
          <p className="border-b-2 border-grey pt-2 pb-2">Writers: </p>
          <p className="border-b-2 border-grey pt-2 pb-2">Stars: </p>
        </div>
        </article>

        <article className="text-white w-full">
        <div>
          <div className="pr-12 text-xl">
            <p className="text-right pb-5">{movies.vote_average}<span className="text-grey"> | 350k</span></p>
            <button className="bg-teal w-full rounded-2xl p-3 text-center mb-5">See Showtimes</button>
            <p className="text-center pb-5"> More watch options</p>
          </div>

            <img className="pb-5" src={movieCollage} alt="movie collage" />
            <img className="pb-5" src={joker} alt="joker movie info" />
            <img className="pb-5" src={topGun} alt="top gun movie info" />
            <img className="pb-5" src={Adventure} alt="adventure genre" />
            <img className="pb-5" src={Drama} alt="drama genre" />
            <img className="pb-5" src={Popular} alt="popular movies" />
            <img className="pb-5" src={Fav} alt=" favorite movies" />
        </div>
        </article>

      </article>

    </section>

  </section>
);
}