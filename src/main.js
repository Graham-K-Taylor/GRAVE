//>5 systems: Masks, Particle Emitters, Physics, Cameras, Tilemaps, timers, SpriteSheet animation, etc.


let config = {type: Phaser.WEBGL, 
    render: { pixelArt: true},
    width: 640,
    height: 480,
    physics: {default: "arcade", arcade: {debug: false}},
    zoom: 2,
    scene: [Menu, Act1, Act2, Act3, Tutorial1, Tutorial2, Tutorial3, Credits] }
const game = new Phaser.Game(config);
let KeyF, KeyR, KeyT, KeyC;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;