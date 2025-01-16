import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext.jsx';

function MovieCard({movie}){
    const { isFavorite, addToFavorites, removeFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e){
       
        e.preventDefault()
        if(favorite) removeFavorites(movie.id)
        else addToFavorites(movie)
    }

    const movieUrl = `${import.meta.env.VITE_REACT_MOVIE_BASE_URL}/${movie.id}`;
    return (
        
        <div className="movie-card">
            
            <div className="movie-poster">
            <a href={movieUrl} target="_blank" rel="noopener noreferrer">

                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>
                </div>
                </a>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}


export default MovieCard;