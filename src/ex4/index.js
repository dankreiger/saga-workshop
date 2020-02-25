import Artyom from 'artyom.js';
import fetch from 'node-fetch';
import { coroutine } from './coroutine';

// async generator example
function* createTodoFetcher() {
  const response = yield fetch(
    'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
  );
  const { message } = yield response.json();
  return `${message}`;
}

document.getElementById('facepalm').addEventListener('click', async () => {
  // run through our generator function
  const quote = await coroutine(createTodoFetcher);

  // write result to dom
  document.getElementById(
    'app'
  ).innerHTML = `<p class="flow-text">${quote}</p>`;
  new Artyom().say(quote);
});
