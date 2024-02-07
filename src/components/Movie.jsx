const Movie = ({ Year, Poster, Type, Title }) => {
  // const handleDetailMovie = (e) => {
  //   console.log(e.target.Title);
  // };

  return (
    <div
      className="shadow-md mb-4 relative font-serif font-extrabold overflow-hidden m-0 p-0 bg-blue-800 text-slate-900 min-h-[30rem] max-h-[30rem] rounded-md md:rounded-xl"
      // onClick={handleDetailMovie}
    >
      <div className="max-w-full py-2 px-auto absolute top-0 left-0 w-full text-slate-200 bg-slate-500 flex items-center justify-between px-4">
        <p>{Year}</p>
        <div>save</div>
      </div>
      <img
        className="w-full h-full object-contain"
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300"}
        alt={Type}
      />
      <div className="text-slate-200 px-4 absolute bottom-0 w-full hover:bg-slate-300 hover:text-blue-800 bg-slate-500 opacity-90 py-2">
        <p className="mb-2">{Type}</p>{" "}
        <span className="border border-blue-600 rounded-md text-slate-100 hover:bg-blue-500 absolute right-4 top-2 px-4 py-1">
          Watch
        </span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default Movie;
