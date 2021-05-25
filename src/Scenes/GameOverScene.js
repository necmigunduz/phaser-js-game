import Phaser from 'phaser';
import { postData } from '../apiData';
import { getUser } from '../User/user';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 260, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    const user = getUser();

    postData(user);

    this.score = this.add.text(
      this.game.config.width * 0.38,
      450,
      `${getUser(user)}'s score is: ${localStorage.getItem('score')}`,
      {
        fontFamily: 'monospace',
        fontSize: 20,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
    );

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.6,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', function () {
      this.btnRestart.setTexture('sprBtnRestartHover'); // set the button texture to sprBtnPlayHover
    // this.sfx.sndBtnOver.play(); // play the button over sound
    }, this);

    this.btnRestart.on('pointerout', function () {
      this.setTexture('sprBtnRestart');
    });

    this.btnRestart.on('pointerdown', function () {
      this.btnRestart.setTexture('sprBtnRestartDown');
    // this.sfx.sndBtnDown.play();
    }, this);

    this.btnRestart.on('pointerup', function () {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('Title');
    }, this);
  }
}