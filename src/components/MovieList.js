import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import MovieDetails from './MovieDetails';

const MovieList = () => {
    const {movies} = useContext(MovieContext);
    return movies.length ? (
        <div className="movie-list">
            <ul>
                {movies.map(movie => {
                    return (<MovieDetails movie={movie} key={movie.id}/>);
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No movies to watch</div>
    );
}
 
export default MovieList;