import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetails = ({movie}) => {
    const {removeMovie} = useContext(MovieContext);
    return (
        <li onClick={() => removeMovie(movie.id)}>
            <div className="title">{movie.title}</div>
            <div className="director">{movie.director}</div>
        </li>
    );
}
 
export default MovieDetails;