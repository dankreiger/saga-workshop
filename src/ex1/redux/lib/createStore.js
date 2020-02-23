// normally we accept preloaded state as the second arguement
// and an enhancer as the third argument
// but for the purpose of this exercise we only need a reducer

export const createStore = reducer => {
  let currentState;
  let listeners = [];

  // fill out the 1, 2, and 3 below

  // ------------ getState -----------------
  // exercise: fill in the getState function
  //
  const getState = () => {}

  // hint: this is a function that returns the current state
  // ---------------------------------------


  // ---------- subscribe ------------------
  // exercise: fill in the subscribe function
  const subscribe = listener => {}

  // hint: 
  // - 1. needs to adds the passed listener to the array of listeners
  //   (see `ex1/index.js` for the function that will listen to the store)
  // - bonus: should return an function that removes the listener from the array of listeners (serves as unsubscribe)
  // ---------------------------------------

  // 3. -------- dispatch -----------------
  // exercise: fill in the dispatch function
  const dispatch = action => {}

  // hints: 
  // - 1. should assign the current state to the state returned by the reducer 
  //      that was passed into createStore
  //      note: remember that the reducer is a function that accepts the current state and an action 
  // - 2. dispatch should call every listener in the array of listeners after assigning the new current state


  // initialize state
  dispatch({});

  return { getState, subscribe, dispatch }
}