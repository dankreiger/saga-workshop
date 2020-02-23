import { createStore } from "./lib/createStore";
import { counter } from "./counter/reducer";

export const storeInstance = createStore(counter);

// so we can debug in the browser
window.store = storeInstance;

export const store = storeInstance;