import 'jest-canvas-mock';
import { Player, Entity } from '../src/Scenes/Entities';


jest.mock('../src/Scenes/Entities');

beforeEach(() => {
    Player.mockClear();
});

test('Creating an instance of the Player (ship), and calling class Player', () => {
    const player = new Player('Game', 200, 150, 'ship');
    expect(Player).toHaveBeenCalledTimes(1);
});

test('Player is calling explode method', () => {
    const player = new Player('Game', 240, 320, 'sprPlayer');
    player.explode(false);
    expect(player.explode).toHaveBeenCalledTimes(1);
});


