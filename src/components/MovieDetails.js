import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetails = ({movie}) => {
    const {dispatch} = useContext(MovieContext);
    return (
        <li onClick={() => dispatch({type: 'REMOVE_MOVIE', id: movie.id})}>
            <div className="title">{movie.title} <span className="rating">{movie.rating}</span> </div>
            <div className="director">{movie.director}</div>
            <div className="runtime">{movie.runtime}</div>
        </li>
    );
}
 
export default MovieDetails;