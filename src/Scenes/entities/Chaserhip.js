import Phaser from 'phaser';
import Entity from './Entities';
import EnemyLaser from './Enemylaser';

export default class ChaserShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy', 'ChaserShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      CHASE: 'CHASE',
    };
    this.state = this.states.MOVE_DOWN;
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }

  update() {
    let enemy;
    if (!this.getData('isDead') && this.scene.player) {
      if (Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y,
      ) < 320) {
        this.state = this.states.CHASE;
      }

      if (this.state === this.states.CHASE) {
        const dx = this.scene.player.x - this.x;
        const dy = this.scene.player.y - this.y;

        const angle = Math.atan2(dy, dx);

        const speed = 100;
        this.body.setVelocity(
          Math.cos(angle) * speed,
          Math.sin(angle) * speed,
        );
      }

      if (this.x < this.scene.player.x) {
        this.angle -= 5;
      } else {
        this.angle += 5;
      }

      if (enemy.x < -enemy.displayWidth
          || enemy.x > this.game.config.width + enemy.displayWidth
          || enemy.y < -enemy.displayHeight * 4
          || enemy.y > this.game.config.height + enemy.displayHeight) {
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.explode();
          }
        }
      }

      for (let i = 0; i < this.enemyLasers.getChildren().length; i += 1) {
        const laser = this.enemyLasers.getChildren()[i];
        laser.update();

        if (laser.x < -laser.displayWidth
            || laser.x > this.game.config.width + laser.displayWidth
            || laser.y < -laser.displayHeight * 4
            || laser.y > this.game.config.height + laser.displayHeight) {
          if (laser) {
            laser.destroy();
          }
        }
      }

      for (let i = 0; i < this.playerLasers.getChildren().length; i += 1) {
        const laser = this.playerLasers.getChildren()[i];
        laser.update();

        if (laser.x < -laser.displayWidth
            || laser.x > this.game.config.width + laser.displayWidth
            || laser.y < -laser.displayHeight * 4
            || laser.y > this.game.config.height + laser.displayHeight) {
          if (laser) {
            laser.destroy();
          }
        }
      }
    }
  }
}