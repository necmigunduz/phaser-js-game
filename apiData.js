import 'regenerator-runtime';

require('dotenv').config();

const apiKey = 'bFQvTZfPrvjkHOOILnoM';

async function postData(inputName) {
  const fetchingURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

  const data = {
    user: inputName,
    score: localStorage.getItem('score'),
  };
  try {
    const response = await fetch(fetchingURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    return error;
  }
}

const sortPlayers = (input) => {
  const arr = [];

  for (let i = 0; i < input.length; i += 1) {
    arr.push([input[i].user, input[i].score]);
  }

  arr.sort((a, b) => b[1] - a[1]);

  return arr;
};

async function getData() {
  const fetchingURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;
  try {
    const response = await fetch(fetchingURL, {
      mode: 'cors',
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return sortPlayers(jsonResponse.result);
    }
    throw new Error('Request Failed!');
  } catch (error) {
    return error;
  }
}

export { postData, getData };