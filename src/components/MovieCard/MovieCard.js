import React from 'react';

import Rate from '../Rate';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({
  movie: { id,name, date, rating, image, type, description },
}) => {
  return (
    <Link to={`/movie/${id}` }>
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div className="card_right__button">
          <a href="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</a>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;
