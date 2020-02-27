### ex4

This is a small exercise where we will complete a generator function that fetches data from an api.
Please complete the `createQuoteFetcher` generator function in `index.js`

The coroutine in `coroutine.js` will step through our generator function for us (Redux saga does something similar under the hood)

---

Coroutine definition (so I don't have to try an define it):

"Coroutines are computer program components that generalize subroutines for non-preemptive multitasking,
by allowing execution to be suspended and resumed. Coroutines are well-suited for implementing familiar
program components such as cooperative tasks, exceptions, event loops, iterators, infinite lists and pipes."

---

Additional Note: If you want to see a very crude implementation of redux saga from scratch, you can visit: https://github.com/dankreiger/redux-saga-from-scratch/blob/master/redux/middlewares/puppyMiddleware.js

I've only implemented `take`, `call`, `put` and `fork` there, but you can see how this uses its own coroutine.
