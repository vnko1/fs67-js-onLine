import {
  createTask,
  editsLiEl,
  onLoadChecking,
  onEnterDown,
} from './functions.js';
export const inputEl = document.querySelector('input');
export const buttonEl = document.querySelector('.addBtn');
export const ulEl = document.getElementById('myUL');

buttonEl.addEventListener('click', createTask);
ulEl.addEventListener('click', editsLiEl);
document.addEventListener('DOMContentLoaded', onLoadChecking);
document.addEventListener('keydown', onEnterDown);
