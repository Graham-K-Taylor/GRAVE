class Act2 extends Phaser.Scene {
    constructor() {
        super("act2Scene");
    }

    preload(){
        this.load.image('particle', './assets/green.png');
    }

    create(){
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
       // this.emitter.setPosition(game.config.width/2, game.config.height/2);
        //this.emitter.setSpeed(50);
        //this.emitter.setBlendMode(Phaser.BlendModes.ADD);
        //this.emitter.setLifespan(3334443);
        //this.emitter.setScale(1,0);
        this.emitter.stop();
        this.emitter.radial = true;
        //this.emitter.setFrequency(-1, 1);
        this.eventTime = new Date;
        //this.emitter.accelerationY = 9.8;
        //this.emitter.setEmitting(false); this actually doesn't exist lmao
        KeyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.light  = this.lights.addLight(game.config.width/2, game.config.height/2, 200);
        this.lights.enable().setAmbientColor(0x555555);
        KeyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update(){
        this.newEventTime = new Date;
        if(Phaser.Input.Keyboard.JustDown(KeyF) && (this.newEventTime - this.eventTime) > 500){
            this.emitter.explode();
            this.eventTime = new Date;
        }
        if(KeyR.isDown){
            this.scene.start("menuScene");
        }
    }
}