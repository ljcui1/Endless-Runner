
'use strict';


let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Menu, Play1 ]
};

let game = new Phaser.Game(config);

// reserve keyboard vars
let keySPACE, keyS;

