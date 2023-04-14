import Header from "../components/Header";


export const detail = () => {
  return [{ title: "Movibes" }];
};

export default function Index() {
  return (
    <div className="flex">
      <Header />     
        <h1>Here is detail page!</h1>
    </div>
  );
}
