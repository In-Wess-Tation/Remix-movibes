import Header from "../components/Header";


export const logOut = () => {
  return [{ title: "Log out" }];
};

export default function Index() {
  return (
    <section className="flex">
      <div>
      <Header />
      </div>

      <article className="bg-dark text-white w-full flex flex-col justify-center pl-96 pr-96 leading-10">
        <h1 className="text-center text-3xl pb-5">Log into your user here</h1>
        <label htmlFor="userName">Username: </label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="email">Email: </label>
        <input type="email" name="emaail" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
      </article>   
    </section>
  );
}
