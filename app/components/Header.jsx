import { NavLink } from "@remix-run/react";
import "remixicon/fonts/remixicon.css";


const Header = () => {

    const activeLink = "h-full bg-teal text-teal p-6 bg-opacity-50 flex items-center justify-center border-r-4 border-teal  font-semibold pr-10"
    const normalLink = "h-full p-10 font-semibold m-auto text-grey pr-10"

    return ( 
        <header className="bg-darkGrey w-full text-center leading-10 h-screen sticky top-0">
            <h1 className="text-teal text-4xl pb-5 pt-7 font-bold">Movibes</h1>
            <div className="grid grid-rows-4 grid-cols-1">
                <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Home</NavLink>
                <NavLink to="/tvSeries" className={({ isActive }) => (isActive ? activeLink : normalLink)}>TV Series</NavLink>
                <NavLink to="/upComming" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Upcomming</NavLink>
                <NavLink to="/logOut" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Log out</NavLink>
            </div>
            
        </header>
     );
}
 
export default Header;