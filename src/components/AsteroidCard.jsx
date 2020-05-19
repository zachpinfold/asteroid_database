import React from 'react';

const AsteroidCard = ({name}) => {
  return (
    <div className='asteroidCard'>
      <h3>{name}</h3>
      <h4>Location:</h4>
      <p>Date discovered:</p>
      <p>Mass:</p>
    </div>
  );
};

export default AsteroidCard;