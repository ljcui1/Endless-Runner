
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
    scene: [ Menu, Play1, Controls, Credits, Pause, GameOver ]
};

let game = new Phaser.Game(config);

let keyW, keyA, keyS, keyD, keySPACE, keyESC;
let highScore;
let newHighScore = false;
