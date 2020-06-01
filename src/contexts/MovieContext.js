import React, { createContext, useReducer } from 'react';
import { movieReducer } from '../reducers/movieReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, dispatch] = useReducer(movieReducer, [
        {title: 'Pulp Fiction', director: 'Quentin Tarantino', id: 'unique-id1'},
        {title: 'The Grand Budapest Hotel', director: 'Wes Anderson', id: 'unique-id2'}
    ]);
    return (
        <MovieContext.Provider value={{movies, dispatch}}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;