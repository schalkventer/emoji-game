import { html } from "lit-html";
import * as state from "./state";
import "..";

export default {
  title: "eg-board",
};

export const Default = () =>
  html`<eg-board .cards="${state.START.cards}" />`;

export const Selecting = () =>
  html`<eg-board .cards="${state.SELECTING.cards}" />`;

export const NoMatch = () =>
  html`<eg-board .cards="${state.NO_MATCH.cards}" />`;

export const Match = () =>
  html`<eg-board .cards="${state.MATCH.cards}" />`;
