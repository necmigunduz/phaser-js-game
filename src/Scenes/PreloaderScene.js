import 'phaser';
import button02 from '../assets/ui/blue_button02.png';
import button03 from '../assets/ui/blue_button03.png';
import logo from '../assets/logo.png';
import box from '../assets/ui/grey_box.png';
import checkedBox from '../assets/ui/blue_boxCheckmark.png';
import bg_music from '../assets/bg-music.mp3';
import explosion_sound from '../assets/explosion.mp3';
import sndBtnOver from '../assets/sndBtnOver.wav';
import sndBtnDown from '../assets/sndBtnDown.wav';
import bg_space from '../assets/bg_space.png';
import sprBg0 from '../assets/sprBg0.png';
import ship from '../assets/ship.png';
import enemy from '../assets/enemy.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';
import enemy3 from  '../assets/enemy3.png';
import laserShooter from '../assets/laser.png';
import sprBtnRestart from '../assets/sprBtnRestart.png';
import sprBtnRestartDown from '../assets/sprBtnRestartDown.png';
import sprBtnRestartHover from '../assets/sprBtnRestartHover.png';
import explosion from '../assets/explosion.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }

  init () {
    this.readyCount = 0;
  }
 
  preload () {
    // add logo image
    this.add.image(400, 300, 'logo');
   
    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
   
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
   
    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);
   
    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);
   
    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
   
    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });  

    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(2000, this.ready, [], this);
   
    // load assets needed in our game
    this.load.image('blueButton1', button02);
    this.load.image('blueButton2', button03);
    this.load.image('phaserLogo', logo);
    this.load.image('box', box);
    this.load.image('checkedBox', checkedBox); 
    this.load.audio('bgMusic', [bg_music]);
    this.load.audio('sndBtnOver', [sndBtnOver]);
    this.load.audio('sndBtnDown', [sndBtnDown]);
    this.load.image('bg_space', bg_space);
    this.load.image('sprBg0', sprBg0);
    this.load.image('ship', ship);
    this.load.image('enemy', enemy);
    this.load.image('enemy1', enemy1);
    this.load.image('enemy2', enemy2);
    this.load.image('enemy3', enemy3);
    this.load.image('laserShooter', laserShooter);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('sprBtnRestartDown', sprBtnRestartDown);
    this.load.image('sprBtnRestartHover', sprBtnRestartHover);
    this.load.spritesheet('explosion', '../src/assets/explosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.audio('explosion_sound', explosion_sound);
  }

  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
    this.scene.start('Title');
    }
  }
  
  create () {
  }
};