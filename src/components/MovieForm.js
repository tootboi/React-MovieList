import React, { useState, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieForm = () => {
    const {addMovie} = useContext(MovieContext);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(title, director);
        setTitle('');
        setDirector('');
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Movie Title" value={title} 
                onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Director" value={director} 
                onChange={(e) => setDirector(e.target.value)} required/>
            <input type="submit" value="add movie"/>
        </form>
    );
}
 
export default MovieForm;