//Runner prefab
class Runner extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.isJumping = false;
        this.isSliding
        this.moveSpeed = 2;
    }

    update(){
        if(!this.isJumping && !this.isSliding){
            if(keySPACE.isDown){
            
            }
        }
    }
}