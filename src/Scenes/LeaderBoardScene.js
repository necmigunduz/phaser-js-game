import Phaser from 'phaser';
import { getData } from '../apiData';
import '@babel/polyfill';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  preload() {
    this.load.image('highScore', '../src/assets/highscore.png');
    this.load.image('Btnback', '../src/assets/btnBack.png');
    this.load.image('Btnbackhover', '../src/assets/btnBackHover.png');
  }

  create() {
    this.BtnBack = this.add.sprite(
      this.game.config.width * 0.9,
      this.game.config.height * 0.08,
      'Btnback',
    );

    this.BtnBack.setInteractive();
    this.highScore = this.add
      .image(this.game.config.width * 0.5, 120, 'highScore')
      .setScale(0.7);

    this.BtnBack.on(
      'pointerover',
      () => {
        this.BtnBack.setTexture('Btnbackhover');
      },
      this,
    );

    this.BtnBack.on('pointerup', () => {
      this.scene.start('Title');
    });

    this.BtnBack.on('pointerout', () => {
      this.BtnBack.setTexture('Btnback');
    });

    getData().then((scores) => {
      const arr = [];
      scores.map((user, i) => {
        arr.push(
          `${(i + 1).toString()}. ${
            user[0]
          }                      ${user[1].toString()}`,
        );
        return true;
      });

      const text = this.add
        .text(280, 190, arr, {
          fontFamily: 'Arial',
          color: '#fff',
          wordWrap: { width: 310 },
        })
        .setOrigin(0);

      const zone = this.add
        .zone(100, 300, 320, 256)
        .setOrigin(1)
        .setInteractive();

      zone.on('pointermove', (pointer) => {
        if (pointer.isDown) {
          text.y += pointer.velocity.y / 10;

          text.y = Phaser.Math.Clamp(text.y, -400, 300);
        }
      });
    });
  }
}