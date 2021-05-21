import 'phaser';
import { Player, ChaserShip, CarrierShip, GunShip, HollowShip, EnemyLaser, PlayerLaser } from './Entities';

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
    
    this.enemy = new ChaserShip(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.0,
      "enemy"
    );

    this.enemy1 = new CarrierShip(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.0,
      "enemy1"
    );

    this.enemy2 = new GunShip(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.0,
      "enemy2"
    );

    this.enemy3 = new HollowShip(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.0,
      "enemy3"
    );

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: 6000,
      callback: function() {

        var enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new GunShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("ChaserShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("CarrierShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else {
          enemy = new HollowShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }
    
        if (enemy !== null) {
          enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true
    });    

    this.time.addEvent({
      delay: 12000,
      callback: function() {
        var enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new GunShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("ChaserShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("CarrierShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else {
          enemy = new HollowShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }

      },
      callbackScope: this,
      loop: true
    }); 

    this.time.addEvent({
      delay: 15000,
      callback: function() {
        var enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new GunShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("ChaserShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("CarrierShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else {
          enemy = new HollowShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }

      },
      callbackScope: this,
      loop: true
    }); 

    this.time.addEvent({
      delay: 9000,
      callback: function() {
        var enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new GunShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("ChaserShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("CarrierShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else {
          enemy = new HollowShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }

      },
      callbackScope: this,
      loop: true
    }); 

    this.physics.add.collider(this.playerLasers, this.enemies, function(playerLaser, enemy) {
      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          enemy.onDestroy();
        }
      
        enemy.explode(true);
        playerLaser.destroy();
      }
    });

    this.physics.add.collider(this.enemyLasers, this.player, function(enemyLaser, player) {
      if (player) {
        if (player.onDestroy !== undefined) {
          player.onDestroy();
        }
      
        player.explode(true);
        enemyLaser.destroy();
      }
    });

    this.physics.add.overlap(this.player, this.enemies, function(player, enemy) {
      if (!player.getData("isDead") &&
          !enemy.getData("isDead")) {
        player.explode(false);
        enemy.explode(true);
      }
    });
  }

  update() {
    this.player.update();

    // if (!this.player.getData("isDead")) {
    //   this.player.update();
    //   if (this.keyW.isDown) {
    //     this.player.moveUp();
    //   }
    //   else if (this.keyS.isDown) {
    //     this.player.moveDown();
    //   }
    //   if (this.keyA.isDown) {
    //     this.player.moveLeft();
    //   }
    //   else if (this.keyD.isDown) {
    //     this.player.moveRight();
    //   }
    
    //   if (this.keySpace.isDown) {
    //     this.player.setData("isShooting", true);
    //   }
    //   else {
    //     this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
    //     this.player.setData("isShooting", false);
    //   }
    // }

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

    if (this.keySpace.isDown) {
      this.player.setData("isShooting", true);
    }
    else {
      this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
      this.player.setData("isShooting", false);
    }
  }

  getEnemiesByType(type) {
    var arr = [];
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      if (enemy.getData("type") == type) {
        arr.push(enemy);
      }
    }
    return arr;
  }
};