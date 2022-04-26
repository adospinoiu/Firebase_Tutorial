import './App.css';
import React, { useState } from 'react';

function App() {
  const [ data, setData ] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData( { ...data, ...newInput });
    
  }

  const handleSubmit = () => {
    console.log(data);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <input
          name="email"
          placeholder="Email"
          onChange={(event) => handleInput(event)}
        />
        
        <input
          name="password"
          placeholder="Password"
          onChange={(event) => handleInput(event)}
        />
        
        <button 
          onClick={handleSubmit} type="submit">Submit
        </button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
