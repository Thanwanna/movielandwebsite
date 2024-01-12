import "../App.css";

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
      <div>
        <h3>{movie.Year}</h3>
      </div>
      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"} alt="poster" />
      </div>
      <div>
        <p>{movie.Type}</p>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
