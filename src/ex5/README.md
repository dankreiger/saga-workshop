## Redux saga setup + watchers/workers

### Getting started

```sh
$ nvm install 12.16.1 # if you don't have it already
$ nvm use
$ yarn
$ yarn start # starts server
$ yarn test # runs tests
```

### Exercise 1 - setup (we can do this together):

1. import saga middleware and add it to the store
2. complete the spec in `./src/state/root.sagas.spec.js`
3. write the root saga to make the spec pass
4. run the root saga from the middleware

### Exercise 2 - call dog WATCHERs (we can do this together)

1. complete the spec for `dogSaga` in `./src/state/dog/sagas.spec.js`
2. complete the `dogSaga` generator function in `./src/state/dog/sagas.js` to make the spec pass
3. complete the spec for `watchFetchDogRequest` in `./src/state/dog/sagas.spec.js` (hint: we will use `takeLatest` from redux-saga)

   - take latest has syntax like so:

   ```js
     yield takeLatest(ACTION_TYPE, sagaFnToInvoke);
   ```

4. complete the `watchFetchDogRequest` generator function in `src/state/dog/sagas.js` to make the spec pass

### Exercise 3 - convert dog thunk action to a saga WORKER

goal: remove `fetchDog` action from `src/state/dog/actions.js` and keep only the pure action creators

1. complete specs for `fetchDogRequestAsync` generator function in `src/state/dog/sagas.spec.js`
2. write `fetchDogRequestAsync` generator function to make the spec pass
3. remove `fetchDog` thunk action from `src/state/dog/actions.js`
4. click the button and watch the puppies fly in

### Bonus:

Bonus 1 - make counter increment on every for fetchDogRequest

Bonus 2 - make an api saga that delays the loading state by 200ms so a loading spinner doesn't flash if the response comes back quickly. Additionally, make the saga cancel in flight ajax requests if another request is made that triggers the same saga