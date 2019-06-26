import blackMirror from './black-mirror.jpg'
import breakingBad from './breaking-bad.jpg'
import deathNote from './death-note.jpg'
import GoT from './game-of-thrones.jpg'
import theMist from './the-mist.jpg'
import theWalkingDead from './the-walking-dead.jpg'
import theWire from './the-wire.jpg'

export default  function getTvshow() {
    return [
        { id: "blkMirror", name: "Black Mirror", tvShowLogo: blackMirror, synopsis: 'Black Mirror is a British science fiction anthology  television series created by Charlie Brooker, with Brooker and Annabel Jones serving as the programme showrunners. It examines modern society, particularly with regard to the unanticipated consequences of new technologies. '},
        { id: "breakBad", name: "Breaking Bad", tvShowLogo: breakingBad, synopsis: 'Mild-mannered high school chemistry teacher Walter White thinks his life can\'t get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels.' },
        { id: "dthNote", name: "Death Note", tvShowLogo: deathNote, synopsis: 'Light Yagami (Tatsuya Fujiwara) is a normal, undistinguished college student -- that is, until he discovers an odd notebook lying on the ground. He soon discovers that the notebook has magic powers: If someone\'s name is written on it while the writer imagines that person\'s face, he or she will die. Intoxicated with his new godlike power, Light kills those he deems unworthy of life. But a mysterious detective known only as L (Ken\'ichi Matsuyama) becomes determined to put a stop to his reign.' },
        { id: "gameOthrns", name: "Game of Thrones", tvShowLogo: GoT, synopsis:'In the Game of Thrones, you either win or you die. Nine noble families fight for control of the mythical land of Westeros. Political and sexual intrigue is pervasive. Robert Baratheon (Mark Addy), King of Westeros, asks his old friend, Lord Eddard Stark (Sean Bean), to serve as Hand of the King, or highest official.' },
        { id: "tWlkDead", name: "The Walking Dead", tvShowLogo: theWalkingDead, synopsis: 'Sherrif Deputy Rick Grimes has been shot. He falls into a coma and wakes up in a hospital, only to find that it is in ruins. He finds a group of survivors and adapts himself to the only survivors left in the city, then little did he know he soon becomes known as the leader. Sherrif Deputy Rick Grimes has to get the small group he attached himself to to safety, food and water. The only thing that stops them is the Walkers, also known as Zombies.' },
        { id: "tWire", name: "The Wire", tvShowLogo: theWire, synopsis: 'Set in Baltimore, this show centers around the city\'s inner-city drug scene. It starts as mid-level drug dealer, D\'Angelo Barksdale beats a murder rap. After a conversation with a judge, Det. James McNulty has been assigned to lead a joint homicide and narcotics team, in order to bring down drug kingpin Avon Barksdale.' },
        { id: "tMist", name: "The Mist", tvShowLogo: theMist, synopsis: 'After a powerful storm damages their Maine home, David Drayton (Thomas Jane) and his young son head into town to gather food and supplies. Soon afterward, a thick fog rolls in and engulfs the town, trapping the Draytons and others in the grocery store. Terror mounts as deadly creatures reveal themselves outside, but that may be nothing compared to the threat within, where a zealot (Marcia Gay Harden) calls for a sacrifice.'}
    ];
}