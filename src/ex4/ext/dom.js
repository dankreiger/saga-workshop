import Artyom from 'artyom.js';

export function writeToDomAndSpeak(text) {
  // write result to dom
  document.getElementById('app').innerHTML = `<p class="flow-text">${text}</p>`;
  new Artyom().say(text);
}
