import 'jest-canvas-mock';
import Player from '../src/Scenes/entities/Player';

jest.mock('../src/Scenes/entities/Entities');

beforeEach(() => {
  Player.mockClear();
});

test('Creating an instance of the Player (ship), and calling class Player', () => {
  new Player('Game', 200, 150, 'ship'); // eslint-disable-line no-new
  expect(Player).toHaveBeenCalledTimes(1);
});

test('Creating an instance of the Player (ship), and calling class Player', () => {
  new Player('Game', 200, 150, 'ship'); // eslint-disable-line no-new
  expect(Player).not.toHaveBeenCalledTimes(0);
});

test('Player is calling explode method', () => {
  const player = new Player('Game', 240, 320, 'sprPlayer');
  player.explode(false);
  expect(player.explode).toHaveBeenCalledTimes(1);
});

test('Player is calling explode method', () => {
  const player = new Player('Game', 240, 320, 'sprPlayer');
  player.explode(false);
  expect(player.explode).not.toHaveBeenCalledTimes(0);
});