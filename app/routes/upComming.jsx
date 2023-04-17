import { useLoaderData } from "react-router";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "../components/Box";




let imgPath ="https://image.tmdb.org/t/p/original"
let APIKey = "8aae96e730d41065f7cfa804530c488a"

export function loader() {
  return (
    axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`)
   .then((response) => response.data.results)
   )
}

export const upComing = () => {
  return [{ title: "Movibes" }];
};

export default function Index() {

  let movies = useLoaderData();
  console.log(movies)

  return (
    <section className="flex bg-dark">
      <Header />
      <div className="flex">
        <article>
           <div className="flex">
           
        <article className="grid grid-rows-1 grid-cols-4 gap-16 text-end pl-16 text-white w-3/3">
        { movies?.map((movie, index) => (
                <Link key={movie.id} to={`/details/${movie.id}`}><div className="rounded-lg" key={index}><p> <span> < i className="ri-star-fill text-peach h-10 w-10"></i> </span> {movie.vote_average}</p><img src={imgPath + movie.poster_path} alt={movie.poster_path} /></div></Link>
                    
                ))}
        </article>

        <div>
          <Box /> 
        </div>

        </div>
        </article>
      </div>

    </section>
  );
}
