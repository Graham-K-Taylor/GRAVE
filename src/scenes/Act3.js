class Act3 extends Phaser.Scene {
    constructor() {
        super("act3Scene");
    }

    preload(){ // loads the images
        this.load.image('temp', './assets/finale.png');
    }

    create(){
        //look, this code is fucked
        //im gonna have to refactor it all to prevent it from crashing
        //it literally remasks every frame
        //its really bad
        //add image-> create a black rectangle to fill screen -> make circle -> make it a mask of the rectangle -> invertAlpha so that things inside the circle are
        //behind the black rectangle
        this.add.image(game.config.width/2, game.config.height/2, 'temp');

        this.overlay = this.add.graphics();

        this.overlay.fillStyle(0x000000, 1).fillRect(0, 0, 800, 600);

        this.cricle = this.make.graphics();
        this.cricle.fillStyle(0xffffff).fillCircle(game.config.width/2, game.config.height/2,500)
        this.mask = new Phaser.Display.Masks.BitmapMask(this, this.cricle);
        this.radius = 500;
        this.mask.invertAlpha = true;

        this.overlay.setMask(this.mask);
        //oh yeah and a key is added to navigate back to the main menu
        KeyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update(){
        this.time = new Date;
        //if the circle still exists, redo everything, destroying the old things in the process. This is so bad. it crashed pretty much every time
        //UPDATE: for some fucking reason it stopped crashing, now it just stutters where it should crash
        //I have no clue what causes this, but I'm just going to take it as a sign from god that it should be this way and cut my losses
        //this code called me a bitch an took my lunch money
        if(this.radius > 0){
            this.finishtime = new Date;
            this.cricle.destroy();
            this.cricle = this.make.graphics();
            this.radius -=.05;
            this.cricle.fillStyle(0xffffff).fillCircle(game.config.width/2, game.config.height/2,this.radius);
            this.mask.destroy();
            this.mask = new Phaser.Display.Masks.BitmapMask(this, this.cricle);
            this.mask.invertAlpha = true;

            this.overlay.setMask(this.mask);
            
        }
        //oh yeah and you can navigate back to the home screen using T
        if(this.time - this.finishtime > 5000){
            this.scene.start("menuScene");
        }
        //this.cricle.radius = this.cricle.radius - .01;
        //console.log(this.cricle.radius);
    }
}