import { inputEl, ulEl } from './script.js';
import { save, load } from './storagefunc.js';

const KEY_STORAGE = 'tasks';

function onLoadChecking() {}

function createTask() {
  const inputValue = inputEl.value.trim();
  const generateId = Math.floor(Math.random() * 1000);
  if (inputValue === '') {
    console.log('type task');
    return;
  }

  addTaskToStorage(inputValue, generateId);
  createEl(inputValue, generateId);
  inputEl.value = '';
}

function createEl(value, id) {
  const liEl = document.createElement('li');
  liEl.textContent = value;
  liEl.dataset.id = id;
  ulEl.appendChild(liEl);
  addCross(liEl);
}

function addCross(el) {
  const span = document.createElement('span');
  const cross = document.createTextNode('\u00D7');
  span.classList.add('close');
  span.append(cross);
  el.appendChild(span);
}

function editsLiEl({ target }) {
  const currentState = load(KEY_STORAGE);

  if (target.nodeName === 'LI') {
    target.classList.toggle('checked');
    const indexOfTask = currentState.findIndex(
      ({ id }) => Number(id) === Number(target.dataset.id),
    );
    currentState[indexOfTask].isDone = !currentState[indexOfTask].isDone;
  }
  if (target.classList.contains('close')) {
    target.parentNode.remove();
    const indexOfTask = currentState.findIndex(
      ({ id }) => +id === +target.parentNode.dataset.id,
    );
    currentState.splice(indexOfTask, 1);
  }
  save(KEY_STORAGE, currentState);
}

function creatObj(text, id, isDone = false) {
  return { text, isDone, id };
}

function addTaskToStorage(text, id) {
  const currentState = load(KEY_STORAGE);
  if (!currentState) {
    save(KEY_STORAGE, [creatObj(text, id)]);
  } else {
    currentState.push(creatObj(text, id));
    save(KEY_STORAGE, currentState);
  }
}

export { createTask, editsLiEl, onLoadChecking };
