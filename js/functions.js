import { inputEl, ulEl } from './script.js';
import { save, load } from './storagefunc.js';

const KEY_STORAGE = 'tasks';

function onLoadChecking() {
  const currentState = load(KEY_STORAGE);
  if (currentState !== undefined) {
    currentState.forEach(({ text, id, isDone }) => createEl(text, id, isDone));
  }
}

function createTask() {
  const inputValue = inputEl.value.trim();
  if (inputValue === '') {
    alert('type task');
    return;
  }
  const generateId = Math.floor(Math.random() * 1000);
  addTaskToStorage(inputValue, generateId);
  createEl(inputValue, generateId);
  inputEl.value = '';
}

function createEl(value, id, isDone = false) {
  const liEl = document.createElement('li');
  liEl.textContent = value;
  liEl.dataset.id = id;
  if (isDone) liEl.classList.add('checked');
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

function onEnterDown(e) {
  if (e.code === 'Enter') {
    createTask();
  }
}

export { createTask, editsLiEl, onLoadChecking, onEnterDown };
