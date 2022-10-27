import { html } from "lit-html";
import * as state from "./state";
import "..";

export default {
  title: "eg-actions",
};

export const Start = () =>
  html`<eg-actions moves="0" difficulty="normal" phase="start" />`;

export const Danger = () =>
  html`<eg-actions moves="4" difficulty="hard" phase="selecting" />`;

export const Selecting = () =>
  html`<eg-actions moves="2" difficulty="normal" phase="selecting" />`;
