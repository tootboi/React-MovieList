import React, { useState, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { fetchMovie } from '../api/fetchMovie';

const MovieForm = () => {
    const {dispatch} = useContext(MovieContext);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');

    const search = async (e) => {
        e.preventDefault();
        const data = await fetchMovie(query);
        if (data.Error) {
            setError(query);
            document.getElementById('errorOverlay').style.display = 'block';
        } else {
            const title = data.Title;
            const director = data.Director;
            dispatch({type: 'ADD_MOVIE', movie: {title, director}});
        }
        setQuery('');
    }
    const overlayOff = (e) => {
        document.getElementById('errorOverlay').style.display = 'none';
    }
    return (
        <div>
            <div className="overlayContainer" onClick={overlayOff}>
                <div id="errorOverlay">
                    <div className="overlay">
                        <div className='errorMessage'>"{error}" returned no results.</div>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={search}>
                <input type="text" placeholder="Movie Title" value={query} 
                    onChange={(e) => setQuery(e.target.value)} required/>
                <input type="submit" value="search movie"/>
            </form>
        </div>
    );
}
 
export default MovieForm;