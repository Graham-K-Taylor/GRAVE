class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){}

    create(){
        //this.scene.start("act2Scene");
        // add F, R, and T as keys
        KeyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        KeyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        KeyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        //set up the text configs
        let menuConfig = {
            fontFamily: 'fantasy',
            fontSize: '48px',
            backgroundColor: '#000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Grave of the Fireflies', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '14px';

        //Text right above the textfield in the Menu, below Game title.
        this.add.text(game.config.width/2, game.config.height/2, 'Press F to go to the first minigame,\nR for the second,and T for the third.', menuConfig).setOrigin(0.5);

        this.add.text(0, game.config.height/2 + 40, "If you want to go back to the menu, press the corresponding button \n(i.e. if you're in the first minigame, press F for the menu.)");
        
    }

    update(){
        //each of the keys lead to the scene in their if block (F -> act1, so on so forth)
        if(KeyF.isDown){
            this.scene.start("tutorial1Scene");
        }
        if(KeyR.isDown){
            this.scene.start("tutorial2Scene");
        }
        if(KeyT.isDown){
            this.scene.start("tutorial3Scene");
        }
    }
}