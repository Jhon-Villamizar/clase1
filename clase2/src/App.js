import React from 'react';
import logo from './logo.svg';
import './App.css';
//!JSX
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Clase # 2!!!!!!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clase donde creamos nuestra app React y estudiamos su estructura
        </a>
      </header>
    </div>
  );
}

export default App;
