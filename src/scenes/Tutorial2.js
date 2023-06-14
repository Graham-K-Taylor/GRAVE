class Tutorial2 extends Phaser.Scene {
    constructor() {
        super("tutorial2Scene");
    }

    preload(){
        this.load.image('tutorial2', './assets/tutorial2.png');
    }

    create(){
        this.bg = this.add.tileSprite(0,0,640,480, 'tutorial2').setOrigin(0,0);
        KeyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(KeyR)){
            this.scene.start('act2Scene');
        }
    }
}