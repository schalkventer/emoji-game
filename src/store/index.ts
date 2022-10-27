import * as types from "../types";
import { createState } from "./createState";
import { select } from "./select";

type callback = (state: types.state) => void

export class Store {
    listeners: callback[]
    #state: types.state

    constructor(state: types.state) {
        this.#state = state || createState()
    }

    set state (value: types.state) {
        this.listeners.forEach((callback) => {
            callback(value)
        })
    }

    get state () {
        return this.#state
    }

    select(id: number) {
        this.state = select(id, this.state)
    }

    subscribe(callback: callback) {
        if (this.listeners.includes(callback)) throw new Error('Callback is already subscribed')
        this.listeners.push(callback)
    }

    unsubscribe(callback: callback) {
        if (!this.listeners.includes(callback)) throw new Error('Callback is not subscribed')
        this.listeners = this.listeners.filter(item => item !== callback)
    }
}

export default Store