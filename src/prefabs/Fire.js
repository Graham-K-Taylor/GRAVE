class Fire extends Phaser.Physics.Arcade.Sprite{

    constructor(scene,x,y,texture,frame,lifetime){
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setImmovable();
        this.lifetime = lifetime;
        
        this.anims.create({
            key: 'flare',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers(texture, {start: 0, end: 1})
        });
        this.play('flare');
        this.start = new Date;
    }
    update(){
        this.check = new Date;
        if(this.check - this.start > this.lifetime){
            this.selfdestroy();
        }
    }
    selfdestroy(){
        this.scene.Fire.remove(this, true);
        this.destroy();
    }
}