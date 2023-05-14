//Block prefab
class Meat extends Phaser.Physics.Arcade.Sprite{
    constructor(x, y, scene, velocity){
        super(scene, x, y, 'meat');

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