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
        //debug
        console.log(data);
        if (data.Error) {
            //shows error overlay when movie cannot be found
            setError(query);
            document.getElementById('errorOverlay').style.display = 'block';
        } else {
            //creates movie list
            const title = data.Title;
            const director = data.Director;
            const runtime = data.Runtime;
            const rating = data.imdbRating;
            dispatch({type: 'ADD_MOVIE', movie: {title, director, runtime, rating}});
        }
        setQuery('');
    }
    const overlayOff = (e) => {
        document.getElementById('errorOverlay').style.display = 'none';
    }
    return (
        <div className='movieForm'>
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