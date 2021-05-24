import { setUser, getUser } from '../src/User/user';

describe('Tests for getting default user name', () => {
  test('Returns Someone as a default name', () => {
    expect(getUser()).toBe('Someone');
  });
});

describe('Tests for setting a new user name', () => {
  test('Should return that the user name was succesfully stored', () => {
    expect(setUser('Necmi')).toBe('User set to: Necmi');
  });
});

describe('Tests for getting new users name', () => {
  test('Should return Necmi', () => {
    expect(getUser()).toBe('Necmi');
  });
});