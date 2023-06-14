class Act1 extends Phaser.Scene {
    constructor() {
        super("act1Scene");
    }

    preload(){ //load assets
        this.load.path = './assets/';
        this.load.spritesheet('slime','player.png',{frameWidth: 16, frameHeight: 32});
        this.load.spritesheet('FIRE','sprite-0006.png',{frameWidth: 16, frameHeight: 16});
        this.load.image('tilesetImage', 'tileset.png');
        this.load.tilemapTiledJSON('tilemapJSON', 'area01.json');
        //this.load.image('exit', 'GOAL'); this was for rendering a tile to act as the goal, but im probably just going to use a tile layer for that :P
    }

    create(){
        //add tilemap, layers, animate slime, rig camera, bind it to the tilemap, and add collision
        
        const map = this.add.tilemap('tilemapJSON');
        const tileset = map.addTilesetImage('tileset','tilesetImage');
        const bgLayer = map.createLayer('Background', tileset, 0,0);
        const terrainLayer = map.createLayer('Terrain', tileset, 0,0);
        const treeLayer = map.createLayer('Trees', tileset, 0,0);
        const slimeSpawn = map.findObject('Spawns', obj => obj.name ==='slimeSpawn');
        this.slime = this.physics.add.sprite(slimeSpawn.x,slimeSpawn.y,'slime', 0);
        this.anims.create({
            key: 'jiggle',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('slime', {start: 0, end: 1})
        });
        this.slime.play('jiggle');
        this.slime.body.setCollideWorldBounds(true);
        this.VEL = 100;
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.slime, true, .25, .25);
        this.physics.world.bounds.setTo(0,0,map.widthInPixels, map.heightInPixels);
        terrainLayer.setCollisionByProperty({collides: true});
        this.physics.add.collider(this.slime, terrainLayer);
        treeLayer.setCollisionByProperty({collides: true});
        this.physics.add.collider(this.slime, treeLayer);
        //make sure the F key is also bound
        KeyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.overlay = this.add.graphics();

        this.overlay.fillStyle(0xFF0000, .40).fillRect(0, 0, 800, 600);
    }

    update(){
        //respond to input and convert to movement using Vector2
        this.direction = new Phaser.Math.Vector2(0);
        if(this.cursors.left.isDown){
            this.slime.flipX = true;
            this.direction.x = -1;
        }else if(this.cursors.right.isDown){
            this.slime.flipX = false;
            this.direction.x = 1;
        }

        if(this.cursors.up.isDown){
            this.direction.y = -1;
        }else if(this.cursors.down.isDown){
            this.direction.y = 1;
        }
        this.direction.normalize(); // makes sure movement speed is constant even on a diagonal
        this.slime.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y); // sets the speed to be the actual speed and not 1 from normalize
        if(this.direction.x == 0 && this.direction.y == 0){
            this.slime.stop('jiggle');
        }
        else if (!(this.slime.anims.isPlaying)){
            this.slime.play('jiggle');
        }
        //allows the player to press F to jump back to the menu
        if(KeyF.isDown){
            this.scene.start("menuScene");
        }
    }
}