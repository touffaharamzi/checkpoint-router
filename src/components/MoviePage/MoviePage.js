import React from 'react';
import './MoviePage.css';
import { Link } from 'react-router-dom';

import {useParams} from 'react-router-dom'
const MoviePage = ({movies}) => {

let {id}=useParams()
const movie = movies.find((el) => el.id == id )
console.log(movie.description);
console.log(id);

  return (
    <div className="Page">
      <div className="title">
        <h2>{movie.name}</h2>
      </div>
      <div className="trailer">
        <iframe width="1478" height="594" src={movie.linktrailler} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      </div>
      <div className="description">
          <h1>{movie.description}</h1>
      </div>
      <Link to={"/" }>
      <div className='click'>
       Home page
      </div>
      </Link>
    </div>
  );
};

export default MoviePage;
