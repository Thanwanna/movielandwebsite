import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import NoMovie from "./components/NoMovie";

// Here is your key: e2847ee8
const API_URL = "http://www.omdbapi.com?apikey=e2847ee8";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (movie) => {
    const response = await fetch(`${API_URL}&s=${movie}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    searchMovies("iron-man");
  }, []);

  return (
    <div className="bg-blue-500 relative w-full text-slate-200 dark:text-slate-900 shadow-lg dark:bg-slate-100 md:px-12 px-4">
      <nav className="fixed top-0 left-0 z-10 bg-blue-700 w-full">
        <Navbar setMovies={setMovies} searchMovies={searchMovies} />
      </nav>

      <main className="mt-[6.6rem] md:mt-[7.6rem] sm:grid sm:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="block py-2" key={movie.Title}>
              <Movie key={movie.Title} {...movie} />
            </div>
          ))
        ) : (
          <div className="px-4">
            <NoMovie />
          </div>
        )}
        {/* <MovieLists movies={movies} /> */}
      </main>

      <footer className="absolute md:relative w-full bottom-0 bg-slate-900">
        {/* <Footer /> */}
        {/* <div className="hidden md:block p-4">
          <h1>Footer</h1>
        </div> */}
      </footer>
    </div>
  );
};

export default App;
