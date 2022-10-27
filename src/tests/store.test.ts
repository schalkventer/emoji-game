import * as state from './state'
import { Store } from '../store'

describe("store", () => {
  it("changes to correct state when starting from config phase", () => {
    let result = null
    const store = new Store(state.CONFIG, { createCardsList: () => state.CARDS })

    const callback = (state) => { result = state } 
    store.subscribe(callback)

    store.start()
    store.unsubscribe(callback)
    expect(result).toEqual(state.START);
  });

  it("1", () => {
    let result = null
    const store = new Store(state.START, { createCardsList: () => state.CARDS })

    const callback = (state) => { result = state } 
    store.subscribe(callback)

    store.select(7)
    store.unsubscribe(callback)
    expect(result).toEqual(state.SELECTING);
  });

  // it("2", () => {
  //   let result = null
  //   const store = new Store(state.SELECTING, { createCardsList: () => state.CARDS })

  //   const callback = (state) => { result = state } 
  //   store.subscribe(callback)

  //   store.select(1)
  //   store.unsubscribe(callback)
  //   expect(result).toEqual(state.NO_MATCH);
  // });
});
