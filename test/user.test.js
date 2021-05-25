import { setUser, getUser } from '../src/User/user';

describe('Tests for getting default user name', () => {
  test('Returns Someone as a default name', () => {
    expect(getUser()).toBe('Someone');
  });

  test('Returns Someone as a default name', () => {
    expect(getUser()).not.toBe('Anyone');
  });
});

describe('Tests for setting a new user name', () => {
  test('Should return that the user name was succesfully stored', () => {
    expect(setUser('Necmi')).toBe('User set to: Necmi');
  });

  test('Should return that the user name was succesfully stored', () => {
    expect(setUser('Necmi')).not.toBe('User set to: Idaho');
  });
});

describe('Tests for getting new users name', () => {
  test('Should return Necmi', () => {
    expect(getUser()).toBe('Necmi');
  });

  test('Should not return Necmi', () => {
    expect(getUser()).not.toBe('Idaho');
  });
});