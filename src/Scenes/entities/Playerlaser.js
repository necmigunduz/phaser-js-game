import Entity from './Entities';

export default class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laserShooter');
    this.body.velocity.y = -200;
  }
}