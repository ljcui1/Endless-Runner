class GameOver extends Phaser.Scene {
    constructor(){
        super('overScene');
    }

    init (args){
        this.score = args.score;
    }

    preload(){
        this.load.image('over', './assets/gameover.png');
        this.load.image('restart', './assets/restart.png');
        this.load.image('menu', './assets/mainmenu_button.png');
        this.load.audio('click', './assets/blipSelect.wav');
    }

    create(){

        
        
        // check for high score in local storage
        // uncomment console.log statements if you need to debug local storage
        if(localStorage.getItem('hiscore') != null) {
            let storedScore = parseInt(localStorage.getItem('hiscore'));
            console.log(`storedScore: ${storedScore}`);
            // see if current score is higher than stored score
            if(this.score > storedScore) {
                console.log(`New high score: ${this.score}`);
                localStorage.setItem('hiscore', this.score.toString());
                highScore = this.score;
                newHighScore = true;
                
            } else {
                console.log('No new high score :/');
                highScore = parseInt(localStorage.getItem('hiscore'));
                newHighScore = false;
            }
        } else {
            //console.log('No high score stored. Creating new.');
            highScore = this.score;
            localStorage.setItem('hiscore', highScore.toString());
            newHighScore = true;
        }


        
        this.over = this.add.tileSprite(0, 0, 960, 540, 'over').setOrigin(0, 0);
        this.restart = this.add.sprite(game.config.width/2, game.config.height/2 + 20, 'restart').setOrigin(0.5, 0.5);
        this.menu = this.add.sprite(game.config.width/2, game.config.height/2 + 150, 'menu').setOrigin(0.5, 0.5);

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            
        };
        

        this.highScoreText = this.add.text (game.config.width/2 - 90, game.config.height/2 - 100, "Highscore: " + highScore, scoreConfig);
        this.scoreText = this.add.text(game.config.width/2 - 80, game.config.height/2 - 70, "Score: " + this.score, scoreConfig);
        
       
    }

    update(){
        this.restart.setInteractive({ useHandCursor: true });
        this.restart.on('pointerdown', () => {
            console.log("restart");
            this.sound.play('click');
            this.scene.stop();
            this.scene.start('playScene1');
            
        });


        this.menu.setInteractive({ useHandCursor: true });
        this.menu.on('pointerdown', () => {
            console.log("menu");
            this.sound.play('click');
            this.scene.start('menuScene');
            this.scene.stop('playScene1');
            this.scene.stop();
        });
        
    }
}
