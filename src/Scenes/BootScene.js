import 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
  preload () {
    this.load.image('logo', sm-logo);
  }
 
  create () {
      this.start('Preloader');
  }
};