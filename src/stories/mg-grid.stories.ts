import { html } from "lit-html";
import * as types from "../types";
import * as mocks from "./mocks";
import "../components";

export default {
  title: "mg-grid",
};

export const Default = () => html`<mg-grid .cards="${mocks.CARDS}" />`;
export const Easy = () => html`<mg-grid .cards="${mocks.EASY_CARDS}" />`;
export const Hard = () => html`<mg-grid .cards="${mocks.HARD_CARDS}" />`;

export const Selecting = () =>
  html`<mg-grid
    .cards="${{ ...mocks.CARDS, 3: { ...mocks.CARDS[3], status: "flipped" } }}"
  />`;

export const NoMatch = () =>
  html`<mg-grid
    .cards="${{
      ...mocks.CARDS,
      3: { ...mocks.CARDS[3], status: "flipped" },
      1: { ...mocks.CARDS[1], status: "flipped" },
    }}"
  />`;

export const Match = () =>
  html`<mg-grid
    .cards="${{
      ...mocks.CARDS,
      4: { ...mocks.CARDS[4], status: "locked" },
      9: { ...mocks.CARDS[9], status: "locked" },
    }}"
  />`;
