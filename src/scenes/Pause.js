class Pause extends Phaser.Scene {
    constructor(){
        super('pauseScene');
        this.soundPlayed = false; // Flag to track if the sound has been played
    }

    preload(){
        this.load.image('pause', './assets/pause.png');
        this.load.image('resume', './assets/resume.png');
        this.load.image('menu', './assets/menu.png');
        this.load.audio('click', './assets/blipSelect.wav');
    }

    create(){

        this.pause = this.add.tileSprite(0, 0, 960, 540, 'pause').setOrigin(0, 0);
        this.resume = this.add.sprite(game.config.width/2, game.config.height/2 - 30, 'resume').setOrigin(0.5, 0.5);
        this.menu = this.add.sprite(game.config.width/2, game.config.height/2 + 100, 'menu').setOrigin(0.5, 0.5);
       
    }

    update(){
        this.resume.setInteractive({ useHandCursor: true });
        this.resume.on('pointerup', () => {
            console.log("resume");
            if (!this.soundPlayed) {
                this.sound.play('click', { volume: 0.25 });
                this.soundPlayed = true; // Set the flag to true after playing the sound
            }
            this.scene.resume('playScene1');
            this.scene.stop();
        });

        //unpause
        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.stop();
            this.scene.resume('playScene1');
        }

        this.menu.setInteractive({ useHandCursor: true });
        this.menu.on('pointerup', () => {
            console.log("menu");
            if (!this.soundPlayed) {
                this.sound.play('click', { volume: 0.25 });
                this.soundPlayed = true; // Set the flag to true after playing the sound
            }
            this.scene.launch('menuScene');
            this.scene.stop('playScene1');
            this.scene.stop();
        });
        
    }
}
