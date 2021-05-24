import startGame from '../index'; // eslint-disable-line import/no-cycle
import { checkForm, noInputError, clearDOM } from './error';
import '../style.css';

const inputWrap = document.createElement('div');
const text1 = document.createElement('h1');
const text = document.createElement('h1');
const input = document.createElement('input');
const submit = document.createElement('button');

inputWrap.classList.add('input-wrap');
text.classList.add('input-text');
input.classList.add('input');
submit.classList.add('submit');

text1.innerHTML = 'SPACE ADVENTURE';
text.innerHTML = 'Enter your name';
input.placeholder = 'Name...';
submit.innerHTML = 'Start';

inputWrap.appendChild(text1);
inputWrap.appendChild(text);
inputWrap.appendChild(input);
inputWrap.appendChild(submit);
document.querySelector('body').appendChild(inputWrap);

submit.onclick = () => {
  const form = checkForm();
  if (form.response) {
    clearDOM();
    startGame(form.user);
  } else {
    noInputError();
  }
};