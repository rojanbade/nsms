import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.rating}</h2>
      <h2>{props.size}</h2>
      <h2>{props.downloads}</h2>
    </div>
  );
};

export default Card;
