class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene');
    }

    preload(){
        //load images
        this.load.image('clouds', './assets/tile_menu.png');
        this.load.image('hills1', './assets/front1.png');
        this.load.image('hills2', './assets/front2.png');
        this.load.image('hills3', './assets/front3.png');
        this.load.image('hill', './assets/title1.png');
        this.load.spritesheet('title', './assets/name.png', {frameWidth: 960, frameHeight: 540, startFrame: 0});
        this.load.image('play', './assets/play.png');
        this.load.image('controls', './assets/controls.png');
        this.load.image('credits', './assets/credits.png');
        
        
    }

    create(){
        //this.scene.start('playScene1');
        this.back2 = this.add.tileSprite(0, 0, 960, 540, 'clouds').setOrigin(0, 0);
        //this.back1 = this.add.tileSprite(0, 0, 960, 540, 'city'). setOrigin(0, 0);
        
        this.front3 = this.add.tileSprite(0, 0, 960, 540, 'hills3').setOrigin(0, 0);
        this.front2 = this.add.tileSprite(0, 0, 960, 540, 'hills2').setOrigin(0, 0);
        this.front1 = this.add.tileSprite(0, 0, 960, 540, 'hills1').setOrigin(0, 0);
        
        this.front = this.add.tileSprite(0, 0, 960, 540, 'hill').setOrigin(0, 0);
        this.title = this.add.sprite(0, 0, 'title').setOrigin(0, 0);
        this.play = this.add.sprite(400, 300, 'play').setOrigin(0, 0);
        this.controls = this.add.sprite(400, 380, 'controls').setOrigin(0, 0);
        this.credits = this.add.sprite(400, 460, 'credits').setOrigin(0, 0);

        // Enable input events for the whole scene
        this.play.setInteractive({ useHandCursor: true });
        this.play.on('pointerdown', () => {
            console.log("play");
            this.scene.start('playScene1');
        });

        this.play.input.hitArea.setTo(0, 0, this.play.width, this.play.height); // Set up hit area

        this.controls.setInteractive({ useHandCursor: true });
        this.controls.on('pointerdown', () => {
            console.log("controls");
            this.scene.pause();
            this.scene.launch('controlScene');

            // Add code here to run when the scene is clicked
        });
        this.controls.input.hitArea.setTo(0, 0, this.controls.width, this.controls.height); // Set up hit area

        this.credits.setInteractive({ useHandCursor: true });
        this.credits.on('pointerdown', () => {
            console.log('credits');
            this.scene.start('creditScene');
            //this.scene.start('playScene1');
            // Add code here to run when the scene is clicked
        });
        this.credits.input.hitArea.setTo(0, 0, this.credits.width, this.credits.height); // Set up hit area



        //create animations
        this.anims.create({
            key: 'wave',
            frames: this.anims.generateFrameNumbers('title', {
                start: 0,
                end: 6,
            }),
            frameRate: 8,
            repeat: -1
        });

        this.title.anims.play('wave');
    }

    update(){
        this.back2.tilePositionX -= 0.1;
        this.front3.tilePositionX += 0.2;
        this.front2.tilePositionX -= 0.25;
        this.front1.tilePositionX += 0.3;
        //this.back1.tilePositionX -= 0.5;
        
    }
}
