import Header from "../components/Header";


export const logOut = () => {
  return [{ title: "Movibes" }];
};

export default function Index() {
  return (
    <div className="flex">
      <Header />
        <h1>Log out</h1>     

    </div>
  );
}
