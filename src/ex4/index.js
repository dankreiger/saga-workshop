import { coroutine } from './coroutine';
import { writeToDomAndSpeak } from './ext/dom';

// const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'; // <- too offensive and absurd

const quoteUrl = 'https://api.quotable.io/random';

// async generator example
function* createQuoteFetcher() {
  // yields to fetch the data from the given url using the window fetch api
  // yields to get the json from the response (needs to be yielded since getting the json is also asynchronous 🤔)
  // returns the response (it should be in response.content for this api)
}

document.getElementById('facepalm').addEventListener('click', async () => {
  // run through our generator function
  const quote = await coroutine(createQuoteFetcher);
  writeToDomAndSpeak(quote);
});
