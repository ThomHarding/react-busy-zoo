import React, { useState } from 'react';
import './App.css';
import AdminPage from './admin/AdminPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import OpenSign from './OpenSign';
import Parade from './Parade';
import CustomButton from './CustomButton';

function App() {
  const [isOpen, setIsOpen] = useState('false');
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [animals, setAnimals] = useState(['wolf', 'elephant', 'snail']);

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

  function handleAddWolf() {
    animals.push('wolf');
    setAnimals([...animals]);
  }

  function handleAddElephant() {
    animals.push('elephant');
    setAnimals([...animals]);
  }

  function handleAddSnail() {
    animals.push('snail');
    setAnimals([...animals]);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <div className="App">
              <header className="App-header">
                <div className="fight">
                  <div className="monster unicorn" >
                    <img src="unicorn.png" width={`${unicornSize * 10}px`} height={`${unicornSize * 10}px`} />
                    <div className='buttons'>
                      <CustomButton onClick={handleUnicornIncrease}>
              Grow unicorn
                      </CustomButton>
                      <CustomButton onClick={handleUnicornAttack}>
              Attack lion
                      </CustomButton>
                    </div>
                  </div>
                  <div className="monster lion">
                    <img src="lion.png" width={`${lionSize * 10}px`} height={`${lionSize * 10}px`} />
                    <div className="buttons">
                      <CustomButton onClick={handleLionIncrease}>
              Grow lion
                      </CustomButton>
                      <CustomButton onClick={handleLionAttack}>
              Attack unicorn
                      </CustomButton>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='open-sign'> 
                  <OpenSign isOpen={isOpen} />
                  <div className="open-buttons">
                    <CustomButton onClick={() => setIsOpen(true)}>Open the zoo</CustomButton>
                    <CustomButton onClick={() => setIsOpen(false)}>Close it</CustomButton>
                  </div>
                </div>
                <hr />
                <div className='animal-parade'>
                  <Parade animals={animals} />
                  <CustomButton onClick={handleAddWolf}>Wolf</CustomButton>
                  <CustomButton onClick={handleAddElephant}>Elephant</CustomButton>
                  <CustomButton onClick={handleAddSnail}>Snail</CustomButton>
                </div>
              </header>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
