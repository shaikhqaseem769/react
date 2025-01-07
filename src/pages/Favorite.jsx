import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext.jsx';
import MovieCard from '../componetns/MovieCard.jsx';

function FavoriteMovies() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div className='favorites'>
                <h2>Your favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className="favorites-empty">
            <h2>No favorite movies yet!</h2>
            <p>Start add movie in favorite it will appear here!</p>
        </div>
    )
}


export default FavoriteMovies