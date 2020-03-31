## Redux saga for accessibility and cacheing

### Getting started (same as ex5)

```sh
$ nvm install 12.16.1 # if you don't have it already
$ nvm use
$ yarn
$ yarn start # starts server
$ yarn test # runs tests
```

- This app has some issues that we can eliminate gracefully with sagas

GOALS:

1. only make an api call if the image is not in the store already
2. throttle to 3g, and make sure we abort any unnecessary api calls

### Exercise 1 - enhance the saga so we select cached data from the store if it exists

### Exercise 2 - throttle down to 3g speed and implement the AbortController api so unnecessary inflight requests are cancelled

- Bonus: try to delay the loading spinner
