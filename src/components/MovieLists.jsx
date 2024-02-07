import Movie from "./Movie";

const MovieLists = ({movies}) => {
  return <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-4">
    {
      movies.map(movie => {
        <Movie key={movie.Title} movie={movie}/>
      })
    }
  </div>;
};

export default MovieLists;
