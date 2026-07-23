import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          language: "en-US",
          page: 1,
        },
      })
      .then((response) => {
        setMovies(response.data.results.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch movies");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading movies...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>

      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MovieList;