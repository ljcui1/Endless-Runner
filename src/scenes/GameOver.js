class GameOver extends Phaser.Scene {
    constructor(){
        super('overScene');
    }

    preload(){
        this.load.image('over', './assets/gameover.png');
        this.load.image('restart', './assets/restart.png');
        this.load.image('menu', './assets/mainmenu_button.png');
    }

    create(){
        this.over = this.add.tileSprite(0, 0, 960, 540, 'over').setOrigin(0, 0);
        this.restart = this.add.sprite(game.config.width/2, game.config.height/2, 'restart').setOrigin(0.5, 0.5);
        this.menu = this.add.sprite(game.config.width/2, game.config.height/2 + 130, 'menu').setOrigin(0.5, 0.5);

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            
        }

        this.score = this.add.text(game.config.width/2 - 80, game.config.height/2 - 100, "Score: " + Play1.score, scoreConfig);
        
       
    }

    update(){
        this.restart.setInteractive({ useHandCursor: true });
        this.restart.on('pointerdown', () => {
            console.log("restart");
            this.scene.restart('playScene1');
            this.scene.stop();
        });

        //unpause
        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.stop();
            this.scene.restart('playScene1');
        }

        this.menu.setInteractive({ useHandCursor: true });
        this.menu.on('pointerdown', () => {
            console.log("menu");
            this.scene.launch('menuScene');
            this.scene.stop('playScene1');
            this.scene.stop();
        });
        
    }
}
