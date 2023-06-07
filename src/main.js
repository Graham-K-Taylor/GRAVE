let config = {type: Phaser.WEBGL, 
    render: { pixelArt: true},
    width: 640,
    height: 480,
    physics: {default: "arcade", arcade: {debug: false}},
    zoom: 2,
    scene: [Menu, Act1, Act2, Act3, Tutorial1, Tutorial2, Tutorial3] }
const game = new Phaser.Game(config);
let KeyF, KeyR, KeyT;