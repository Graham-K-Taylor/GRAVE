class Act2 extends Phaser.Scene {
    constructor() {
        super("act2Scene");
    }

    preload(){}

    create(){
        this.particles = this.add.particles('particle');
        this.emitter = this.particles.createEmitter();
        this.emitter.setPosition(game.config.width/2, game.config.height/2);
        this.emitter.setSpeed(20);
        this.emitter.setBlendMode(Phaser.BlendModes.ADD);
        this.emitter.setLifespan(99999999);
        this.emitter.setScale(1,0);
        this.emitter.setEmitting(false);
        KeyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update(){
        if(KeyF.isDown){
            this.emitter.explode(1);
        }
    }
}