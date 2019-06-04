import React from 'react';
import cover from './movieCover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <img src={cover} alt='movieCover'/>
      <p>
        <h1>Hello Ewan.</h1>
      </p>
    </div>
  );
}

export default App;
