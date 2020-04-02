## Redux saga basics

### Getting started

```sh
$ nvm install 12.16.1 # if you don't have it already
$ nvm use
$ yarn
$ yarn start # starts server
$ yarn test # runs tests
```

---

GOALS:

- hook up root saga
- call watchers from root in parallel
- call workers from watchers

---

### Exercise 1 - setup

1. run the root saga from the middleware

### Exercise 2 - setup root saga

1. complete the spec in `./src/state/root.sagas.spec.js`
1. complete saga in `./src/state/root.sagas.js`

### Exercise 3 - setup watcher sagas

1. complete the spec for watchers in `./src/state/root.sagas.spec.js`
2. complete the saga watcher in `./src/state/root.sagas.js`

### Exercise 4 - setup worker sagas

1. complete the spec for workers in `./src/state/root.sagas.spec.js`
2. complete the saga workers in `./src/state/root.sagas.js`
