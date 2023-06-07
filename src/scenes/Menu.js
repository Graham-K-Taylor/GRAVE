class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){}

    create(){
        //this.scene.start("act2Scene");
        KeyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        KeyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        KeyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update(){
        if(KeyF.isDown){
            this.scene.start("act1Scene");
        }
        if(KeyR.isDown){
            this.scene.start("act2Scene");
        }
        if(KeyT.isDown){
            this.scene.start("act3Scene");
        }
    }
}