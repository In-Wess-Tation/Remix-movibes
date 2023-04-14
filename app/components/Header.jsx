import { Link } from "@remix-run/react";


const Header = () => {
    return ( 
        <header className="bg-darkGrey w-64 p-5 text-center leading-10 h-screen">
            <h1 className="text-teal text-4xl pb-5 pt-7">Movibes</h1>
            <div className="grid grid-rows-4 grid-cols-1">
                <Link to="/" className="text-teal pb-16 pt-16 focus:bg-teal/50 focus:border-r-4 focus:border-teal">Home</Link>
                <Link to="/tvSeries" className="text-teal pb-16 pt-16 focus:bg-teal/50 focus:border-r-4 focus:border-teal">TV Series</Link>
                <Link to="/upComming" className="text-teal pb-16 pt-16 focus:bg-teal/50 focus:border-r-4 focus:border-teal">Upcomming</Link>
                <Link to="/logOut" className="text-teal pb-16 pt-16 focus:bg-teal/50 focus:border-r-4 focus:border-teal">Log out</Link>
            </div>
            
        </header>
     );
}
 
export default Header;