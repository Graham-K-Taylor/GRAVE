class Tutorial3 extends Phaser.Scene {
    constructor() {
        super("tutorial3Scene");
    }

    preload(){
        this.load.image('tutorial3', './assets/tutorial3.png');
    }

    create(){
        this.bg = this.add.tileSprite(0,0,640,480, 'tutorial3').setOrigin(0,0);
        KeyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(KeyT)){
            this.scene.start('act3Scene');
        }
    }
}