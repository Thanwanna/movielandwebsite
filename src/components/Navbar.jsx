import { useState } from "react";
import searchIcon from "../../public/images/search-logo.svg";
import Menu from "./Menu";

const Navbar = ({ searchMovies }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchText);
    setSearchText("");
  };

  return (
    <div className="flex items-center justify-between py-8 px-8 relative">
        <Menu />
      <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold md:flex-1 md:ml-7">Movie Land</h1>
      <div className="">
        <form
          className="flex relative overflow-hidden rounded-md hover:border-none hover:shadow-sm hover:shadow-slate-300"
          onSubmit={handleSearch}
        >
          <input
            className="bg-slate-200 p-2 lg:w-96 text-blue-800 "
            type="text"
            placeholder="Search Movies"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="absolute right-2">
            <img
              onClick={handleSearch}
              className="h-10 w-10 text-blue-500 opacity-45 hover:opacity-100"
              src={searchIcon}
              alt="searchIcon"
            />
          </span>

          {/* <button className="bg-slate-600 p-2" type="submit">
            Search
          </button> */}
        </form>
      </div>
      <ul className="flex max-md:hidden">
        <li className="p-4 hover:text-slate-50">
          <a href="#home">home</a>
        </li>
        <li className="p-4 hover:text-slate-50">
          <a href="#about"></a>about
        </li>
        <li className="p-4 hover:text-slate-50">
          <a href="#contact">contact</a>
        </li>
        <li className="p-4 hover:text-slate-50">
          <a href="sign_in">sign in</a>
          <a className="hidden" href="profile">
            profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
