import MovieCard from "../componetns/MovieCard.jsx";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js";

import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopuralMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    loadPopuralMovies();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-from">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search...
        </button>
      </form>

        {error && 
            (<div className="error-message"> {error}
            </div>)
        }

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => {
            return (
              
                <MovieCard movie={movie} key={movie.id} />
              
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
