import React, { useState } from 'react';
import './App.css';

const ATTACK_VALUE = 1;

function handleLionIncrease() {
  setLionSize(lionSize + ATTACK_VALUE);
}

function handleLionAttack() {
  setUnicornSize(unicornSize - ATTACK_VALUE);
}

function handleUnicornIncrease() {
  setUnicornSize(unicornSize + ATTACK_VALUE);
}

function handleUnicornAttack() {
  setLionSize(lionSize - ATTACK_VALUE);
}

function handleAddGiraffe() {
  traffic.push('giraffe');
  setTraffic([...traffic]);
}

function handleAddElephant() {
  traffic.push('elephant');
  setTraffic([...traffic]);
}

function handleAddDonkey() {
  traffic.push('donkey');
  setTraffic([...traffic]);
}

function App() {
  const [isOpen, setIsOpen] = useState('false');
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [animals, setAnimals] = useState('giraffe', 'elephant', 'donkey');
  return (
    <div className="App">
      <header className="App-header">
      <div className="fight">
        <div style={{ width: `${unicornSize * 10}px` }} className="monster">
          <img src="unicorn.png" width={20} />
          <div className='buttons'>
            <button onClick={handleUnicornIncrease}>
              Grow unicorn
            </button>
            <button onClick={handleUnicornAttack}>
              Attack lion
            </button>
          </div>
        </div>
        <div style={{ width: `${lionSize * 10}px` }} className="monster">
          <img src="lion.png" width={20} />
          <div className="buttons">
            <button onClick={handleLionIncrease}>
              Grow lion
            </button>
            <button onClick={handleLionAttack}>
              Attack unicorn
            </button>
          </div>
        </div>
      </div>
      <div className='open-sign'> 
        <OpenSign isOpen={isOpen} />
        <div className="open-buttons">
          <button onClick={() => setIsOpen(true)}>Open</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
      <div className='animal-parade'>
        <Parade animals={animals} />
        <button onClick={handleAddGiraffe}>Giraffe</button>
        <button onClick={handleAddElephant}>Elephant</button>
        <button onClick={handleAddDonkey}>Donkey</button>
      </div>
      </header>
    </div>
  );
}

export default App;
