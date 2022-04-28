import React, { useState } from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function Parade() {
  const [animals, setAnimals] = useState(['bear', 'tiger', 'alligator']);

  function handleAddBear() {
    animals.push('bear');

    setAnimals([...animals]);  
  }

  function handleAddTiger() {
    animals.push('tiger');

    setAnimals([...animals]);  
  }

  function handleAddAlligator() {
    animals.push('alligator');

    setAnimals([...animals]);  
  }
  function handleRemoveAnimal() {
    animals.pop();

    setAnimals([...animals]);  
  }

  return (
    <>
      <div>
        {animals.map(animal => <AnimalEmoji key={animal} animal={animal} />)}
      </div>
      <button onClick={handleAddBear}>Add bear</button>
      <button onClick={handleAddTiger}>Add tiger</button>
      <button onClick={handleAddAlligator}>Add alligator</button>
      <button onClick={handleRemoveAnimal}>Remove last animal</button>
    </>
  );
}
