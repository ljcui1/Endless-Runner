class Rules extends Phaser.Scene {
    constructor(){
        super('ruleScene');
    }

    preload(){
        this.load.image('rules', './assets/rules.png');
        this.load.image('go', './assets/go.png');
    }

    create(){

        this.rules = this.add.tileSprite(0, 0, 960, 540, 'rules').setOrigin(0, 0);

        

        this.go = this.add.sprite(650, 540, 'go').setOrigin(0, 1);

        // Enable input events for the whole scene
        this.go.setInteractive();
        this.go.on('pointerdown', () => {
            console.log("go");
            this.sound.play('click');
            this.scene.start('playScene1');
            this.scene.stop();
            
            
            // Add code here to run when the scene is clicked

              
        });
       
    }


    update(){
        
    }
}
