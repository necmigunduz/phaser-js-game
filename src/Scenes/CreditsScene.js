import Phaser from 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Necmi GUNDUZ', { fontSize: '26px', fill: '#fff' });
    this.mcText = this.add.text(0, 0, 'Thanks to Microverse', { fontSize: '26px', fill: '#fff' });

    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.mcText,
      this.zone,
    );

    this.madeByText.setY(600);

    this.mcText.setY(900);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        return this.creditsTween.destroy;
      }.bind(this),
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 5000,
      delay: 1000,
      onComplete: function () {
        return this.madeByTween.destroy;
      }.bind(this),
    });

    this.madeByTween = this.tweens.add({
      targets: this.mcText,
      y: -300,
      ease: 'Power1',
      duration: 6000,
      delay: 1000,
      onComplete: function () {
        return this.madeByTween.destroy;
      }.bind(this),
    });
  }
}