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
                {
                    getTvshow().map(showStack => (
                        <ShowStack 
                        key={showStack.id} 
                        id={showStack.id} 
                        name={showStack.name} 
                        tvShowLogo={showStack.tvShowLogo} />
                    ))
                }
            </div>
            {/* <div className="Row">
                {
                     getTvshow().map(showStack => (
                        <ShowStack 
                        key={showStack.id} 
                        id={showStack.id} 
                        name={showStack.name} 
                        tvShowLogo={showStack.tvShowLogo} />
                    ))
                }
            </div> */}
        </div>
    );
}

function getTvshow() {
    return [
        { id: "blkMirror", name: "Black Mirror", tvShowLogo: blackMirror },
        { id: "breakBad", name: "Breaking Bad", tvShowLogo: breakingBad },
        { id: "dthNote", name: "Death Note", tvShowLogo: deathNote },
        { id: "gameOthrns", name: "Game of Thrones", tvShowLogo: GoT },
        { id: "tWlkDead", name: "The Walking Dead", tvShowLogo: theWalkingDead },
        { id: "tWire", name: "The Wire", tvShowLogo: theWire }
    ];
}