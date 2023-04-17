import { useLoaderData } from "@remix-run/react";

import Header from "../components/Header";


import movieCollage from "./svg'er/movieCollage.svg"
import joker from "./svg'er/joker.svg"
import topGun from "./svg'er/topGun.svg"
import Adventure from "./svg'er/adventure.svg"
import Drama from "./svg'er/drama.svg"
import Popular from "./svg'er/popular.svg"
import Fav from "./svg'er/fav.svg"


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

      <article className="flex">

        <article>
        <div className="flex gap-5 text-2xl">
            <p>{movies.title}</p>
            <p>{movies.release_date}</p>
            {movies.adult === false ? <p>PG-13</p> : movie.adult === true ? <p>PG-13 <BsDot className="dot"/></p> : null}
            <p>{movies.runtime}m</p>
            <p className="text-grey border-2 border-grey rounded-3xl">Genre</p>
            <p className="text-grey border-2 border-grey rounded-3xl">Genre</p>
        </div>

        <div className="text-2xl">
            <p>{movies.overview}</p>
        </div>

        <div>

        </div>
        </article>

        <article className="text-white">
        <div>
            <img src={movieCollage} alt="movie collage" />
            <img src={joker} alt="joker movie info" />
            <img src={topGun} alt="top gun movie info" />
            <img src={Adventure} alt="adventure genre" />
            <img src={Drama} alt="drama genre" />
            <img src={Popular} alt="popular movies" />
            <img src={Fav} alt=" favorite movies" />
        </div>
        </article>

      </article>

    </section>

  </section>
);
}