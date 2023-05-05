class Pause extends Phaser.Scene {
    constructor(){
        super('pauseScene');
    }

    preload(){
        this.load.image('pause', './assets/temp_paused.png');
    }

    create(){
        this.pause = this.add.tileSprite(0, 0, 960, 540, 'pause').setOrigin(0, 0);
       
    }

    update(){
        this.input.on('pointerdown', () => {
            this.scene.resume('playScene1');
            this.scene.stop();
        });
        
    }
}
