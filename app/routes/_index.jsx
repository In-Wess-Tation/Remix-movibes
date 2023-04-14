import { useLoaderData } from "react-router";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import Filter from "../components/Filter";




let imgPath ="https://image.tmdb.org/t/p/original"
let URLPath = "https://api.themoviedb.org/3/"
let APIKey = "8aae96e730d41065f7cfa804530c488a"

export function loader() {
  return (
    axios(`${URLPath}movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
   .then((response) => response.data.results)
   )
}

export const meta = () => {
  return [{ title: "Movibes" }];
};

export default function Index() {

  let movies = useLoaderData();
  console.log(movies)

  return (
    <section className="flex bg-dark">
      <Header />
      <article>
        <h2 className="text-white p-5 pl-16 text-2xl font-bold">Trending</h2>
          
        <article className="grid grid-rows-1 grid-cols-4 gap-16 text-end pl-16 text-white w-3/3">
        { movies?.map((movie, index) => (
            index < 4 ? 
            <Link key={movie.id} to={`/detail/${movie.id}`}><div key={index}><p> <span> < i className="ri-star-fill text-peach h-10 w-10"></i> </span> {movie.vote_average}</p><img className="rounded-2xl" src={imgPath + movie.poster_path} alt={movie.poster_path} /></div></Link>       
            : null     
            ))}
        </article>
      </article>
      <div>
        <Box /> 
        <Filter />
      </div>
 
    </section>
  );
}
