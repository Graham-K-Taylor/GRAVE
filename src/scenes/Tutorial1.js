class Tutorial1 extends Phaser.Scene {
    constructor() {
        super("tutorial1Scene");
    }

    preload(){
        this.load.image('tutorial1', './assets/tutorial1.png');
    }

    create(){
        this.bg = this.add.tileSprite(0,0,640,480, 'tutorial1').setOrigin(0,0);
        KeyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(KeyF)){
            this.scene.start('act1Scene');
        }
    }
}