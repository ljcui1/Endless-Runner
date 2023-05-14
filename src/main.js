/*

Name: Lia Cui
Game Title: Armakiddon
Approximate Hours: ~25-30 hours
Creative Tilt Justification:
    In terms of what makes the game technically interesting, there are a couple of
things I utilized. Pulling from Professor Altice's Paddle Parkour P3, I implemented a 
locally stored highscore. I also figured out that I could implement increasing difficulty
by setting a timer that would count every 45 seconds and increase the spawn rate of the
obstacles. It was also very difficult for me but I managed to have collision to a group 
target specific game objects.

    Appearance wise, I feel that I stretched myself to the limit with this game.
I drew all of the assets and even dipped into music/sound production as I used 
JummBox and Jsfxr to make the background music and sound effects. All text in the
game aside from score display was hand-drawn in Aseprite. I only just started working 
in pixel art this quarter and I'm proud of the work I've done, especially the parallax
background and dirt tile sprite.

*/


'use strict';

//global variables
let cursors;

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Menu, Play1, Controls, Credits, Pause, GameOver, Rules ]
};

let game = new Phaser.Game(config);

let keyW, keyA, keyS, keyD, keySPACE, keyESC;
let highScore;
let newHighScore = false;
let spawnRateBlock = 768;
let spawnRateBird = 480;
