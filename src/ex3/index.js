import 'regenerator-runtime/runtime';

const render = val =>
  (document.getElementById('app').innerHTML = `<h1>${val}</h1>`);
const button = document.querySelector('.genBtn');

// exercise: write a generator function counter
// it should render the current number value to the dom,
// and increment it by one for every button click
// generator fns
let i = 0;
function* counter() {}

const gen = counter();
button.addEventListener('click', () => {
  gen.next();
});
