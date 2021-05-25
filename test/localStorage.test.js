import setScoreToStore from '../src/localStorage';

const score = 90;

test('set localStorage with player score', () => {
  setScoreToStore(score);
  expect(localStorage.getItem('score')).toBe('90');
});

test('not set localStorage with player score', () => {
  setScoreToStore(score);
  expect(localStorage.getItem('score')).not.toBe('95');
});