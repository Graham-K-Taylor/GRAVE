class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create(){
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
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Credits of the Fireflies', menuConfig).setOrigin(0.5);
        KeyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        menuConfig.fontSize = '14px';

        //Text right above the textfield in the Menu, below Game title.
        this.add.text(game.config.width/2, game.config.height/2, 'All but the sound assets are my own.', menuConfig).setOrigin(0.5);
        this.add.text(0, game.config.height/2 + 40, "Sound is from freesounds.org.\n Press C to go back to menu.");
    }
    update(){
        if(KeyC.isDown){
            this.scene.start("menuScene");
        }
    }
}