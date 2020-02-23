import 'regenerator-runtime/runtime'

const render = val => document.getElementById('app').innerHTML = `<h1>${val}</h1>`;
const button = document.querySelector('.genBtn');

// generator fns

// exercise: write a generator function 
// that will render 0 to the dom, 
// and increment it by one for every button click

const gen = counter();
button.addEventListener('click', () => {
  gen.next();
})

