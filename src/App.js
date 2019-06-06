import React from 'react';
import './App.css';
import blackMirror from './black-mirror.jpg'
import breakingBad from './breaking-bad.jpg'
import deathNote from './death-note.jpg'
import GoT from './game-of-thrones.jpg'
import theMist from './the-mist.jpg'
import theWalkingDead from './the-walking-dead.jpg'
import theWire from './the-wire.jpg'

function App() {
  return (
    <div className="App">
      <div className="Row">
        <div className="TvTile">
          <img src={blackMirror} alt="blackt mirror" />
          <div className="TitleOverLay">
            <h1>Black Mirror</h1>
          </div>
        </div>
        <div className="TvTile">
          <img src={breakingBad} alt="breaking bad" />
          <div className="TitleOverLay">
            <h1>Breaking Bad</h1>
          </div>
        </div>
        <div className="TvTile">
          <img src={deathNote} alt="death note" />
          <div className="TitleOverLay">
            <h1>Death Note</h1>
          </div>
        </div>
      </div>
      <div className="Row">
        <div className="TvTile">
          <img src={GoT} alt="game of thrones" />
          <div className="TitleOverLay">
            <h1>Game of Thrones</h1>
          </div>
        </div>
        <div className="TvTile">
          <img src={theWalkingDead} alt="the walking dead" />
          <div className="TitleOverLay">
            <h1>The Walking Dead</h1>
          </div>
        </div>
        <div className="TvTile">
          <img src={theWire} alt="the wire" />
          <div className="TitleOverLay">
            <h1>The Wire</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
