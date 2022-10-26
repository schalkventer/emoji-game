import * as types from "../types";
import {} from ".";
import { LitElement } from "lit";

export class Model extends LitElement {
  state: types.state;

  constructor() {
    super();

    this.state = {
      cards: {},
      phase: "start",
      selected: null,
    };
  }
}
