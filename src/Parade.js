import React from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function Parade({ animals }) {
  return (
    <>
      <div>
        {
          animals.map(animal => <AnimalEmoji key={animal} animal={animal} />)
        }
      </div>
    </>
  );
}
