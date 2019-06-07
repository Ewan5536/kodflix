import React from 'react';
import ShowStack from './ShowStack';
import blackMirror from './black-mirror.jpg'
import breakingBad from './breaking-bad.jpg'
import deathNote from './death-note.jpg'
import GoT from './game-of-thrones.jpg'
import theMist from './the-mist.jpg'
import theWalkingDead from './the-walking-dead.jpg'
import theWire from './the-wire.jpg'
export default function Gallery() {
    return (
        <div>
            <div className="Row">
                <ShowStack name="Black Mirror" tvShowLogo={blackMirror} />
                <ShowStack name="Breaking Bad" tvShowLogo={breakingBad} />
                <ShowStack name="Death Note" tvShowLogo={deathNote} />
            </div>
            <div className="Row">
                <ShowStack name="Game of Thrones" tvShowLogo={GoT} />
                <ShowStack name="The Walking Dead" tvShowLogo={theWalkingDead} />
                <ShowStack name="The Wire" tvShowLogo={theWire} />
            </div>
        </div>
    );
}