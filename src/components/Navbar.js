import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';

const Navbar = () => {
    const {movies} = useContext(MovieContext);
    return (
        <div className="navbar">
            <h1>Movies to Watch</h1>
            <p>You have {movies.length} movies to watch.</p>
        </div>
    );
}
 
export default Navbar;