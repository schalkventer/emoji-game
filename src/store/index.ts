import * as types from "../types";
import { createCardsList } from "./createCardsList";
import { select } from "./select";

export const createState = (options: types.options): types.state => ({
    phase: "start",
    selected: null,
    visual: 'characters',
    difficulty: 'normal',
    highscore: null,
    moves: null,
    cards: options.createCardsList ? options.createCardsList() : createCardsList()
})

export class Store {
  listeners: types.callback[];
  #state: types.state;

  constructor(state: types.state, options?: types.options) {
    this.listeners = []
    this.#state = state || createState(options || {});
  }

  set state(value: types.state) {
    this.listeners.forEach((callback) => {
      callback(value);
    });
  }

  get state() {
    return Object.freeze({ ...this.#state });
  }

  changeDifficulty(difficulty: types.difficulty) {
    this.state = {
      ...this.state,
      difficulty,
    };
  }

  start() {
    this.state = {
      ...this.state,
      phase: "start",
    };
  }

  select(id: number) {
    this.state = select(id, this.state);
  }

  subscribe(callback: types.callback) {
    if (this.listeners.includes(callback))
      throw new Error("Callback is already subscribed");
      
    this.listeners.push(callback);
  }

  unsubscribe(callback: types.callback) {
    if (!this.listeners.includes(callback))
      throw new Error("Callback is not subscribed");

    this.listeners = this.listeners.filter((item) => item !== callback);
  }
}

export default Store;
