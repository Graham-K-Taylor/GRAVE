class Act2 extends Phaser.Scene {
    constructor() {
        super("act2Scene");
    }

    preload(){ // load assets
        this.load.image('particle', './assets/green.png');
        this.load.audio('shiny', './assets/windchimesfx.mp3');
    }

    create(){
        //set sound to a var + set volume, create particle emitter, set characteristics + sprite to use as particle
        this.sparkle = this.sound.add('shiny', {volume:.25});
        this.particles = this.add.particles('particle');
        this.emitter = this.particles.createEmitter({
            x: game.config.width/2,
            y: game.config.height,
            speedY: {min:-20, max:35},
            speedX: {min:10, max:40},
            accelerationY: {random: [-19,-8]},
            accelerationX: {random: [-12,12]},
            scale: {random: [.3, 1]},
            alpha : {random: [0, 1]},
            frequency: -1,
            quantity: 1,
            blendMode: 'ADD',
            lifespan : 40000,
            angle: {min:0, max:180}
        });
        let menuConfig = {
            fontFamily: 'fantasy',
            fontSize: '24px',
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
        this.message = this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Why do fireflies have to die so soon?', menuConfig).setOrigin(0.5).setAlpha(0);
        this.message.setDepth(-99);
        //make the emitter start out as not emitting
        this.emitter.stop();
        //idk what this does but it sounds cool
        this.emitter.radial = true;
        //initialize a start time for the timer for releasing the fireflies
        this.eventTime = new Date;
        //this.emitter.setEmitting(false); this actually doesn't exist lmao
        // add keyboard input for F + R
        KeyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        KeyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        //I have no fucking clue how lights work but I added them for later (I want to attach a light to each particle)
        this.light  = this.lights.addLight(game.config.width/2, game.config.height/2, 200);
        this.lights.enable().setAmbientColor(0x555555);
        this.tima = new Date;
        this.TimeForGame = 60000;
        this.Alpha = 0;
    }

    update(){
        //updates the time
        this.newEventTime = new Date;
        //if you pressed the key and 500ms have passed, the emitter emits particles, the sound plays if it isnt already, and the timer resets.
        if(Phaser.Input.Keyboard.JustDown(KeyF) && (this.newEventTime - this.eventTime) > 500){
            this.emitter.explode();
            if(!this.sparkle.isPlaying){
                this.sparkle.play();
            }
            this.eventTime = new Date;
            this.Alpha += .0005;
            this.message.setAlpha(this.Alpha);
            
        }
        // if R is pressed, the menu is loaded
        if(this.newEventTime - this.tima > this.TimeForGame){
            this.scene.start("menuScene");
        }
    }
}