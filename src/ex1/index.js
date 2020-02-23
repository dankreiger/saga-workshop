import {
  store
} from './redux/store';
import {
  increment,
  decrement
} from './redux/counter/actions';

const {
  getState,
  subscribe,
  dispatch
} = store;

const render = () => {
  const app = document.getElementById('app');
  app.innerHTML = `<h1>${getState()}</h1>`;
};

const renderSubscription = subscribe(render);
// Note - you can unsubscribe by calling: renderSubscription()
render();

/**
 * @description
 * click listeners that dispatch actions to the store
 */
const i = document.querySelector('.increment');
const d = document.querySelector('.decrement');
i.addEventListener('click', () => {
  dispatch(increment());
});

d.addEventListener('click', () => {
  dispatch(decrement());
});