## Non-blocking saga exercise (fork)

### Getting started

```sh
$ nvm install 12.16.1 # if you don't have it already
$ nvm use
$ yarn
$ yarn start # starts server
$ yarn test # runs tests
```

After 3 seconds of idle user time, the app will dispatch a 'START_SCREEN_SAVER' action.

The goal is to:

- start a `watchScreensaverActive` saga from the `rootSaga` that listens for this 'START_SCREEN_SAVER' action

---

The `watchScreensaverActive` watcher saga should:

- fork an `initiateScreensaver` saga and then wait for the 'STOP_SCREEN_SAVER' action (this will be dispatched when the user moves the mouse)
- after we take the stop action, we cancel the forked task

---

The `initiateScreensaver` saga should:

- call a small `apiCall` saga to get pictures of dogs (code for `apiSaga` is included)
- once it receives the result, it should dispatch a 'SHOW_PUPPIES' action with a payload containing the result:
  - hint: `yield put({ type: 'SHOW_PUPPIES', payload: result });`
- delay for a bit so people can enjoy the images
- dispatch an action to hide the puppies
- delay again for a bit

This saga should repeat itself until it has been cancelled. Note that cancelling a saga wrapped in a try block will cause it to jump into a finally block.
For an example of this, visit: https://redux-saga.js.org/docs/advanced/TaskCancellation.html

In the finally block, we should dispatch an action to hide the puppies in the screensaver.

1. complete spec in `redux/root.sagas.spec.js`
2. complete saga in `redux/root.sagas.js` to make spec pass

3. complete spec in `redux/screensaver/sagas.spec.js`
4. complete saga in `redux/screensaver/sagas.js` to make specs pass
