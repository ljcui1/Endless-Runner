class Play1 extends Phaser.Scene {
    constructor(){
        super('playScene1');
    }

    preload(){
        //load images
        this.load.spritesheet('runner', './assets/runsheet.png', {frameWidth: 32, frameHeight: 48, startFrame: 0});
    }

    create(){
    }
}