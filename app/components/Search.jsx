


const Search = () => {
    return ( 
        <div className="w-full h-12 text-grey rounded-3xl mt-10 p-3 pl-8 font-bold bg-darkGrey">
            <label htmlFor="search">Search for movies, TV shows...</label>
            <input className="border-none bg-transparent" type="search" name="search" id="search" />
        </div>
     );
}
 
export default Search;