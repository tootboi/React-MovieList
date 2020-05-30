import React from 'react';
import MovieContextProvider, { MovieContext } from './contexts/MovieContext';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar/>
        <MovieList/>
        <MovieForm/>
      </MovieContextProvider>
    </div>
  );
}

export default App;
