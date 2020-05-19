import React from 'react';
import AsteroidCard from './AsteroidCard';

const List = ({props}) => {
    return (
        <main className='list'>
            {props.asteroids.map((asteroid) => {
                return <AsteroidCard key={asteroid.id} {...asteroid}/>
            })}
        </main>
    );
};

export default List;

