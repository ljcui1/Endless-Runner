//enemy prefab
class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity){
        super(scene, game.config.width + 64, Phaser.Math.Between(192, 476), 'bird');

        //this.Play1 = Play1;               // maintain scene context

        // set up physics sprite
        scene.add.existing(this);    // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);    // add to physics system
        this.setVelocityX(-velocity);            // make it go!
        this.setImmovable();             
        this.body.setAllowGravity(false);       
        
        //this.newBarrier = true;                 // custom property to control barrier spawning

        
    }

    update() {
        
    }
}