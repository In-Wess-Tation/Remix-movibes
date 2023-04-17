import Header from "../components/Header";

// export const loader= async ({ params }) => {



//   console.log(params.id); 
// }


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