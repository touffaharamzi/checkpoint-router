import React, { useState, Fragment } from 'react';

import { moviesData } from './components/MoviesData';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie/AddMovie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    
      <BrowserRouter>
          <div className="App">

      <Routes>
        <Route exact path="/" element={ 
        <Fragment>
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
            <MoviesList
            moviesList={moviesList}
            nameSearch={nameSearch}
            ratingSearch={ratingSearch}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
        </Fragment>
      }>
          
        </Route>
        <Route path="/movie/:id" element={<MoviePage movies={moviesData}/>} />

      </Routes>
      
      </div>
    </BrowserRouter>
    

   
   
  );
}

export default App;
