class Pause extends Phaser.Scene {
    constructor(){
        super('pauseScene');
    }

    preload(){
        this.load.image('pause', './assets/pause_menu.png');
        this.load.image('resume', './assets/resume.png');
        this.load.image('menu', './assets/menu.png');
    }

    create(){
        this.pause = this.add.tileSprite(0, 0, 960, 540, 'pause').setOrigin(0, 0);
        this.resume = this.add.sprite(game.config.width/2, game.config.height/2 - 60, 'resume').setOrigin(0.5, 0.5);
        this.menu = this.add.sprite(game.config.width/2, game.config.height/2 + 100, 'menu').setOrigin(0.5, 0.5);
       
    }

    update(){
        this.resume.setInteractive({ useHandCursor: true });
        this.resume.on('pointerdown', () => {
            console.log("resume");
            this.scene.resume('playScene1');
            this.scene.stop();
        });
        this.menu.setInteractive({ useHandCursor: true });
        this.menu.on('pointerdown', () => {
            console.log("menu");
            this.scene.launch('menuScene');
            this.scene.stop('playScene1');
            this.scene.stop();
        });
        
    }
}
