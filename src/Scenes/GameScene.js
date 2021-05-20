import 'phaser';
import { Player, ChaserShip } from './Entities';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
  }
 
  create () {
    this.add.image(400, 300, 'bg_space');

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "ship"
    ); 
    
    this.enemy1 = new ChaserShip(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.0,
      "enemy"
    );

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();

    this.time.addEvent({
      delay: 100,
      callback: function() {
        var enemy = new ChaserShip(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );

        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true
    });

    
  }

  update() {
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    }
    else if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    }
    else if (this.keyD.isDown) {
      this.player.moveRight();
    }
  }
};