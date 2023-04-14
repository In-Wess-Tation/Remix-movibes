import { useLoaderData } from "react-router";
import Header from "../components/Header";
import { json } from "@remix-run/node";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import Filter from "../components/Filter";

import "remixicon/fonts/remixicon.css";





let imgPath ="https://image.tmdb.org/t/p/original"
let URLPath = "https://api.themoviedb.org/3/"
let APIKey = "8aae96e730d41065f7cfa804530c488a"

export async function loader() {
  const trendings = await fetch(`${URLPath}movie/now_playing?api_key=${APIKey}&language=en-US&page=1`);

  const upCommings = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`);

  const tvSeries = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${APIKey}&language=en-US`)
  return json({
    trendings: await trendings.json(),
    upCommings: await upCommings.json(),
    tvSeries: await tvSeries.json()
  });
}

// const fetchMovies = async () => {
//   try {
//     const res = await Promise.all([
//       axios.get(`${URLPath}movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
//     ]);
//     const data = res.map((res) => res.data);
//     console.log(data.flat());
//   } catch {
//     throw Error("Promise failed");
//   }
// };

// const urls = [
//   `${URLPath}movie/now_playing?api_key=${APIKey}&language=en-US&page=1`,

// ]

// const fetchMovies = async () => {
//   try {
//     const response = awaitPromise.all(
//       urls.map(url => fetch(url).then(res => res.json()))
//     )
//     console.log(response)
//   } catch (error) {
//     console.log("Error", error)
//   }
// }
// fetchMovies()

export const meta = () => {
  return [{ title: "Movibes" }];
};

export default function Index() {

  const { trendings, upCommings, tvSeries} = useLoaderData();
  console.log(upCommings)


  return (
    <section className="flex bg-dark">
      <Header />
      <article>
      <article className="pt-16 pl-10 pb-16">
        { trendings.results?.map((trending, index) => (
            index < 1 ? 
            <Link key={trending.id} to={`/detail/${trending.id}`}><div key={index}><img className="rounded-2xl object-cover h-72 w-full" src={imgPath + trending.poster_path} alt={trending.poster_path} /></div></Link>       
            : null     
            ))}
        </article>

        <h2 className="text-white p-5 pl-10 text-2xl font-bold">Trending</h2>
        <article className="grid grid-rows-1 grid-cols-4 gap-16 text-end pl-10 text-white w-3/3">
        { trendings.results?.map((trending, index) => (
            index < 4 ? 
            <Link key={trending.id} to={`/detail/${trending.id}`}><div key={index}><p> <span> < i className="ri-star-fill text-peach h-10 w-10"></i> </span> {trending.vote_average}</p><img className="rounded-2xl" src={imgPath + trending.poster_path} alt={trending.poster_path} /></div></Link>       
            : null     
            ))}
        </article>

        <h2 className="text-white p-5 pl-10 text-2xl font-bold">Upcomming</h2>
        <article className="grid grid-rows-1 grid-cols-4 gap-16 text-end pl-10 text-white w-3/3">
        { upCommings.results?.map((upComming, index) => (
            index < 4 ? 
            <Link key={upComming.id} to={`/detail/${upComming.id}`}><div key={index}><p> <span> < i className="ri-star-fill text-peach h-10 w-10"></i> </span> {upComming.vote_average}</p><img className="rounded-2xl" src={imgPath + upComming.poster_path} alt={upComming.poster_path} /></div></Link>       
            : null     
            ))}
        </article>

        <h2 className="text-white p-5 pl-10 text-2xl font-bold">Tv Series</h2>
        <article className="grid grid-rows-1 grid-cols-4 gap-16 text-end pl-10 text-white w-3/3">
        { tvSeries.results?.map((tvSerie, index) => (
            index < 4 ? 
            <Link key={tvSerie.id} to={`/detail/${tvSerie.id}`}><div key={index}><p> <span> < i className="ri-star-fill text-peach h-10 w-10"></i> </span> {tvSerie.vote_average}</p><img className="rounded-2xl" src={imgPath + tvSerie.poster_path} alt={tvSerie.poster_path} /></div></Link>       
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
