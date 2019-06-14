import React from 'react';
import ShowStack from './ShowStack';
import blackMirror from './black-mirror.jpg'
import breakingBad from './breaking-bad.jpg'
import deathNote from './death-note.jpg'
import GoT from './game-of-thrones.jpg'
// import theMist from './the-mist.jpg'
import theWalkingDead from './the-walking-dead.jpg'
import theWire from './the-wire.jpg'
export default function Gallery() {
    return (
        <div>
            <div className="Row">
                <ShowStack id= "blkMirror" name="Black Mirror" tvShowLogo={blackMirror} />
                <ShowStack id= "breakBad" name="Breaking Bad" tvShowLogo={breakingBad} />
                <ShowStack id= "dthNote" name="Death Note" tvShowLogo={deathNote} />
            </div>
            <div className="Row">
                <ShowStack id= "gameOthrns" name="Game of Thrones" tvShowLogo={GoT} />
                <ShowStack id= "tWlkDead" name="The Walking Dead" tvShowLogo={theWalkingDead} />
                <ShowStack id= "tWire"name="The Wire" tvShowLogo={theWire} />
            </div>
        </div>
    );
}