import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([
        {title: 'Pulp Fiction', director: 'Quentin Tarantino', id: 'unique-id1'},
        {title: 'The Grand Budapest Hotel', director: 'Wes Anderson', id: 'unique-id2'}
    ]);
    const addMovie = (title, director) => {
        setMovies([...movies, {title: title, director:director, id: uuidv1()}]);
    }
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    }
    return (
        <MovieContext.Provider value={{movies, addMovie, removeMovie}}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;