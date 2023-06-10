class Background extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }
}

class Act3 extends Phaser.Scene {
    constructor() {
        super("act3Scene");
    }

    preload(){
        this.load.image('temp', './assets/temp1.png');
    }

    create(){
        /*this.test = new Background(this, game.config.width/2, game.config.height/2, 'temp',);
        //circle(game.config.width/2, game.config.height/2, 100, 0xFFFFFF, 1);
        //this.masc = new GeometryMask(this, this.cricle)
        //this.masc = this.cricle.createGeometryMask(this);
        this.rectangle = this.add.graphics();
        this.rectangle.fillStyle(0x000000, .8).fillRect(0, 0, game.config.width, game.config.height);
        this.cricle = this.add.graphics();
        this.cricle.fillStyle(0xFFFFFF,1).fillCircle(game.config.width/2, game.config.height/2,100)
        this.masc = new Phaser.Display.Masks.BitmapMask(this, this.cricle);
        
        //this.masc.setInvertAlpha();
        this.masc.invertAlpha = true;
        this.rectangle.setMask(this.masc);*/
        this.add.image(game.config.width/2, game.config.height/2, 'temp');

        this.overlay = this.add.graphics();

        this.overlay.fillStyle(0x000000, 1).fillRect(0, 0, 800, 600);

        //this.maskGraphics = this.make.graphics();

        //this.maskGraphics.fillStyle(0xffffff);
        //this.maskGraphics.fillRect(100, 100, 256, 256);
        this.cricle = this.make.graphics();
        this.cricle.fillStyle(0xffffff).fillCircle(game.config.width/2, game.config.height/2,500)
        this.mask = new Phaser.Display.Masks.BitmapMask(this, this.cricle);
        //this.mask = new Phaser.Display.Masks.BitmapMask(this, this.maskGraphics);
        this.radius = 500;
        this.mask.invertAlpha = true;

        this.overlay.setMask(this.mask);
        KeyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update(){
        if(this.radius > 0){
            this.cricle.destroy();
            this.cricle = this.make.graphics();
            this.radius -=.5;
            this.cricle.fillStyle(0xffffff).fillCircle(game.config.width/2, game.config.height/2,this.radius);
            this.mask.destroy();
            this.mask = new Phaser.Display.Masks.BitmapMask(this, this.cricle);
            this.mask.invertAlpha = true;

            this.overlay.setMask(this.mask);
            if(KeyT.isDown){
                this.scene.start("menuScene");
            }
        }
        //this.cricle.radius = this.cricle.radius - .01;
        //console.log(this.cricle.radius);
    }
}