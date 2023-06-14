class FireBomb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setVelocityY(200);
        
        this.scene = scene;
        this.startY = this.y;
    }

    update(){
        if(this.y <= (this.startY + 580)){
            this.selfdestroy();
        }
    }

    selfdestroy(){
        this.scene.fireBombs.splice(this.scene.fireBombs.indexOf(this), 1);
        this.scene.Fire.add(new Fire(this.scene, this.x, this.y, 'FIRE',0,Math.floor(4000 + Math.random() * 6000)));
        this.destroy();
    }
}