describe('screenSaver sagas', () => {
  describe('watchScreensaverActive', () => {
    it('calls the screensaver watcher', () => {});
  });

  // this kind of spec is like Club Mate - either you love it or you hate it.
  // Give it a chance though :) you might find it comforting.
  // Remember, Sagas are "Long lived transactions"
  describe('initiateScreensaver', () => {
    it(`
    - Looks to see if there are errors in the state 
    - If there are no errors, it enters a while loop. 
    - From there it calls an api saga to get dog pictures 
      note: (api saga can do error handling and cancel the saga)
    - When it receives the result, it dispatches the result to the reducer.
    - Then it delays 3000 ms so we can enjoy the dog pictures.
    - Afterwards it dispatches an action to hide the dog pictures.
    - The it delays again for 2000ms and repeats the loop.`, () => {});

    it(`
    - Looks to see if there are errors in the state 
    - If there are no errors, it enters a while loop.
    - From there it calls an api saga to get dog pictures 
    note: (api saga can do error handling and cancel the saga)
    - Suddenly the saga is cancelled
    - It dispatches an action to hide the puppies`, () => {
      // hint - to simulate cancellation, call return() instead of next() on the generator function
    });

    it(`
    - Looks to see if there are errors in the state 
    - If there are no errors, finish the saga "done".`, () => {
      // hint - to see if the generator is done, call gen.next().done
    });
  });

  describe('apiCall', () => {});
});
