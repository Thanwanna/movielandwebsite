import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";
// import MovieCard from "./components/MovieCard";

// Here is your key: e2847ee8
const API_URL = "http://www.omdbapi.com?apikey=e2847ee8";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  const handleSearchMovie = () => {
    searchMovies(searchText);
    setSearchText('')
  }

  return (
    <div className="app">
      <div className="brandName">
        <h1>MOVIELAND BY THANWANNA</h1>
      </div>
      <div className="searchBar">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* <img alt="search" /> */}
          <button onClick={handleSearchMovie}>Search</button>
        </div>
      </div>
      {movies.length > 1 ? (
        <div className="container">
          {movies.map((movie) => <Movie key={movie.Title} movie={movie} />)}
        </div>
      ) : (
        <div className="empty">
          <h1>No Movie Found </h1>
        </div>
      )}
    </div>
  );
}

export default App;
