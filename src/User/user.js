let user = 'Someone';

const setUser = (inputUser) => {
  user = inputUser;
  return `User set to: ${user}`;
};

const getUser = () => user;

export { setUser, getUser };