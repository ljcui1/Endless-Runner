//Block prefab
class Block extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity){
        super(scene, game.config.width + 64, Phaser.Math.Between(192, 476), 'dirt');

        //this.Play1 = Play1;               // maintain scene context

        // set up physics sprite
        this.add.existing(this);    // add to existing scene, displayList, updateList
        this.Play1.physics.add.existing(this);    // add to physics system
        this.setVelocityX(velocity);            // make it go!
        this.setImmovable();                    
        
        //this.newBarrier = true;                 // custom property to control barrier spawning

        
    }

    update() {/*
        // add new block when existing block hits center X
        if(this.newBlock && this.x < centerX) {
            // (recursively) call parent scene method from this context
            this.Play1.addBlock(this.parent, this.velocity);
            //this.newBlock = false;
        }

        // destroy block if it reaches the left edge of the screen
        if(this.x < -this.width) {
            this.destroy();
        }*/
    }
}