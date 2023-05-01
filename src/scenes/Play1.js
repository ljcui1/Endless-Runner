class Play1 extends Phaser.Scene {
    constructor(){
        super('playScene1');
    }

    preload(){
        //load images
        this.load.spritesheet('runner', './assets/runsheet.png', {frameWidth: 32, frameHeight: 48, startFrame: 0});
        this.load.image('dirt', './assets/dirt_tile.png');
        this.load.image('background', './assets/first.png');
    }

    create(){
        this.background = this.add.tileSprite(0, 0, 960, 540, 'background').setOrigin(0, 0);

        // make ground tiles group
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += 64) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 64, 'dirt', 'block').setScale(1).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }

        this.p1 = this.physics.add.sprite(120, game.config.height - 85, 'runner', 'run').setScale(1);








        //define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    }

    update(){
        this.background.tilePositionX -= 0.5;
    }
}