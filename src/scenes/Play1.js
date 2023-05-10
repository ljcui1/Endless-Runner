class Play1 extends Phaser.Scene {
    constructor(){
        super('playScene1');
    }

    preload(){
        //load images
        this.load.spritesheet('runner', './assets/run_boy.png', {frameWidth: 32, frameHeight: 48, startFrame: 0});
        this.load.spritesheet('enemy', './assets/birdsheet.png', {frameWidth: 48, frameHeight: 32, startFrame: 0});
        this.load.image('dirt', './assets/dirt_tile.png');
        this.load.image('background', './assets/first.png');
        this.load.image('city1', './assets/city1.png');
        this.load.image('city2', './assets/city2.png');
        this.load.image('city3', './assets/city3.png');
        this.load.image('esc', './assets/esc.png');
        this.load.image('meat', './assets/meat.png');
    }

    create(){

        //variables and settings
        this.MAX_VELOCITY = 250;
        this.MAX_JUMPS = 2; // change for double/triple/etc. jumps 🤾‍♀️
        this.JUMP_VELOCITY = -700;
        this.physics.world.gravity.y = 2600;
        this.jumps = this.MAX_JUMPS;
        this.jumping = false; // <-- Initialize 'this.jumping' to 'false'

        //tile sprite
        this.background = this.add.tileSprite(0, 0, 960, 540, 'background').setOrigin(0, 0);
        this.third = this.add.tileSprite(0, 0, 960, 540, 'city3').setOrigin(0, 0);
        this.second = this.add.tileSprite(0, 0, 960, 540, 'city2').setOrigin(0, 0);
        this.first = this.add.tileSprite(0, 0, 960, 540, 'city1').setOrigin(0, 0);
        this.esc = this.add.tileSprite(0, 0, 960, 540, 'esc').setOrigin(0, 0);

        // make ground tiles group
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += 64) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 64, 'dirt').setScale(1).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }

        // put another tile sprite above the ground tiles
        this.groundScroll = this.add.tileSprite(0, game.config.height-64, game.config.width, 64, 'dirt').setOrigin(0);

        //set up p1 kid
        this.p1 = this.physics.add.sprite(200, game.config.height - 85, 'runner').setScale(1);
        this.p1.setCollideWorldBounds(true);
        


        //create animations

        this.anims.create({
            key: 'bird',
            frames: this.anims.generateFrameNumbers('enemy',{
                start:0,
                end: 2,
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('runner', {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('runner', {
                start: 0,
                end: 0,
            }),
            frameRate: 1
        });

        this.p1.anims.play('run');

        // add physics collider
        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.newBlock);


        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        // set up barrier group
        this.blockGroup = this.add.group({
            runChildUpdate: true
        });

        this.addBlock();

        this.time.delayedCall(Phaser.Math.Between(1000, 2500), () => {
            this.addBlock();
        })

         // set up barrier group
         this.birdGroup = this.add.group({
            runChildUpdate: true
        });

        this.addEnemy();

        this.time.delayedCall(Phaser.Math.Between(1000, 2500), () => {
            this.addEnemy();
        })

        
        
       
        

    }

    addEnemy(){
        this.newBird = new Enemy(this, 180).setOrigin(0.5, 1);
        this.birdGroup.add(this.newBird);
    }
    
    // create new barriers and add them to existing barrier group
    addBlock() {
        this.newBlock = new Block(this, 180).setOrigin(0.5, 1);
        this.blockGroup.add(this.newBlock);
        this.meat = this.add.sprite(this.newBlock.x, this.newBlock.y - 64, 'meat');
        
    }


    update(){
        this.background.tilePositionX += 0.1;
        this.third.tilePositionX += 0.2;
        this.second.tilePositionX += 0.25;
        this.first.tilePositionX += 0.3;
        this.groundScroll.tilePositionX += 3;

        // add new block when existing block hits center X
        if(this.newBlock.x < game.config.width/2) {
            // (recursively) call parent scene method from this context
            this.addBlock();
            //this.newBlock = false;
        }

        // destroy block if it reaches the left edge of the screen
        if(this.newBlock.x < -this.width) {
            this.destroy();
        }

        
        this.p1.anims.play('run', true);

        // check keyboard input
        if(keyA.isDown) {
            this.p1.setVelocityX(-this.MAX_VELOCITY);
            //this.p1.setFlip(true, false);
            
        } else if(keyD.isDown) {
            this.p1.setVelocityX(this.MAX_VELOCITY);
        } else {
            this.p1.body.setVelocityX(0);
        }

        // check if p1 is grounded
	    this.p1.isGrounded = this.p1.body.touching.down;
	    // if so, we have jumps to spare 
	    if(this.p1.isGrounded) {
	    	this.jumps = this.MAX_JUMPS;
	    	this.jumping = false;
	    } else {
	    	this.p1.anims.play('jump');
	    }
        // allow steady velocity change up to a certain key down duration
	    if(this.jumps > 0 && (Phaser.Input.Keyboard.DownDuration(keyW, 150) || Phaser.Input.Keyboard.DownDuration(keySPACE, 150))) {
	        this.p1.body.velocity.y = this.JUMP_VELOCITY;
	        this.jumping = true;
	    } 
        // finally, letting go of the UP key subtracts a jump
	    if(this.jumping && (Phaser.Input.Keyboard.UpDuration(keyW) || Phaser.Input.Keyboard.UpDuration(keySPACE))) {
	    	this.jumps--;
	    	this.jumping = false;
	    }

        //pause
        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.pause();
            this.scene.launch('pauseScene');
        }

        
    }
}