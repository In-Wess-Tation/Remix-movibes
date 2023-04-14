import Header from "../components/Header";
import { useLoaderData } from "react-router";


// let imgPath ="https://image.tmdb.org/t/p/original"
// let URLPath = "https://api.themoviedb.org/3/"
// let APIKey = "8aae96e730d41065f7cfa804530c488a"

// export const loader = async () => {
//   axios(`${URLPath}movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
//    .then((response) => response.data.results)
//   return {title: "Detail page"}
// }

// export default function App() {
//   const data = useLoaderData();

//   return <h1>{data.title}</h1>
//}

export const detail = () => {
  return [{ title: "Movie Details" }];
};

export default function Index() {
  return (
    <div className="flex">
      <Header />     
        <h1>Here is detail page!</h1>
    </div>
  );
}
