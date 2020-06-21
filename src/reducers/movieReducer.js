import { v1 as uuidv1 } from 'uuid';

export const movieReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [...state, {
                title: action.movie.title,
                director: action.movie.director,
                runtime: action.movie.runtime,
                rating: action.movie.rating,
                id: uuidv1()
             }]
        case 'REMOVE_MOVIE':
            return state.filter(movie => movie.id !== action.id)
        default:
            return state
    }
}