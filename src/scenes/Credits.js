class Credits extends Phaser.Scene {
    constructor(){
        super('creditScene');
    }

    preload(){
        this.load.image('page', './assets/credits_page.png');
        this.load.image('back', './assets/back_button.png');
    }

    create(){
        this.page = this.add.tileSprite(0, 0, 960, 540, 'page').setOrigin(0, 0);
    
        this.back = this.add.sprite(0, 0, 'back').setOrigin(0, 0);

        // Enable input events for the whole scene
        this.back.setInteractive();
        this.back.on('pointerdown', () => {
            console.log("back");
            this.scene.resume('menuScene');
            this.scene.stop();
            
            
            // Add code here to run when the scene is clicked

              
        });

        this.back.input.hitArea.setTo(18, 10, 210, 142); // Set up hit area
    }

    update(){
        
    }
}
