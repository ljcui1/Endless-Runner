//Block prefab
class Block extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity){
        super(scene, game.config.width + 64, Phaser.Math.Between(192, 476), 'dirt');

        //this.Play1 = Play1;               // maintain scene context

        // set up physics sprite
        scene.add.existing(this);    // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);    // add to physics system
        this.setVelocityX(-velocity);            // make it go!
        this.setImmovable();             
        this.body.setAllowGravity(false);
        this.meat = scene.add.sprite(this.newBlock.x, this.newBlock.y - 64, 'meat');       
        
        //this.newBarrier = true;                 // custom property to control barrier spawning

        
    }

    update() {
        this.meat.setPosition(this.newBlock.x, this.newBlock.y - 64);
        
    }
}