import buckethead_small from "../assets/images/buckethead_small.jpg";
import the_blueprint from "../assets/images/the_blueprint.png";
import abstract_division from "../assets/images/abstract_division.jpg";
import james_brown from "../assets/images/james_brown.webp";

import holdMeForever from "../assets/music/buckethead_hold_me_forever.mp3";
import uDontKnow from "../assets/music/Jay-Z - U Don't Know.mp3";
import aftermath from "../assets/music/Aftermath.mp4";
import theBoss from "../assets/music/the_boss.mp4";

export const tracks = [
    {
        title: "Pike 65 Hold Me Forever (In memory of my mom Nancy York Carroll)",
        artist: "Buckethead Pickes",
        src: holdMeForever,
        thumbnail: buckethead_small,
    },
    {
        title: "U Don't Know",
        artist: "JAY-Z",
        src: uDontKnow,
        thumbnail: the_blueprint,
    },
    {
        title: "The Boss",
        artist: "James Brown",
        src: theBoss,
        thumbnail: james_brown,
    },
    {
        title: "Aftermath",
        artist: "Abstract Division",
        src: aftermath,
        thumbnail: abstract_division,
    },
];
