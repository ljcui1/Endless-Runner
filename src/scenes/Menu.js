class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene');
    }

    preload(){
        //load images
        this.load.image('clouds', './assets/tile_menu.png');
        this.load.image('city', './assets/tile_menu2.png');
        this.load.image('hill', './assets/title1.png');
        
    }

    create(){
        this.scene.start('playScene1');
        this.back2 = this.add.tileSprite(0, 0, 960, 540, 'clouds').setOrigin(0, 0);
        //this.back1 = this.add.tileSprite(0, 0, 960, 540, 'city'). setOrigin(0, 0);
        this.front = this.add.tileSprite(0, 0, 960, 540, 'hill').setOrigin(0, 0);
        
    }

    update(){
        this.back2.tilePositionX -= 0.25;
        //this.back1.tilePositionX -= 0.5;
        
    }
}
