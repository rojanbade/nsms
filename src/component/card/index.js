import React from 'react';

const Card = (props) => {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'tomato',
        textAlign: 'center',
        marginTop: '50px',
      }}
    >
      <h2>{props.rating}</h2>
      <h2>{props.size}</h2>
      <h2>{props.downloads}</h2>
    </div>
  );
};

export default Card;
