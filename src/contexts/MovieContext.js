import React, { createContext, useReducer, useEffect } from 'react';
import { movieReducer } from '../reducers/movieReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, dispatch] = useReducer(movieReducer, [
        
    ], () => {
        const localData = localStorage.getItem('movies');
        return localData ? JSON.parse(localData) : [
            {title: 'Pulp Fiction', director: 'Quentin Tarantino', id: 'unique-id1'},
            {title: 'The Grand Budapest Hotel', director: 'Wes Anderson', id: 'unique-id2'}
        ];
    });
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);
    return (
        <MovieContext.Provider value={{movies, dispatch}}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;