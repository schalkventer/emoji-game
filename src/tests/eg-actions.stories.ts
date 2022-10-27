import { html } from "lit-html";
import * as state from "./state";
import "..";

export default {
  title: "eg-actions",
};

export const Start = () =>
  html`<eg-actions moves="0" difficulty="normal" phase="start" />`;

export const Danger = () =>
  html`<eg-actions moves="4" difficulty="hard" phase="start" />`;

export const Selecting = () =>
  html`<eg-actions moves="2" difficulty="normal" phase="selecting" />`;

export const Settings = () =>
  html`<eg-actions moves="2" difficulty="normal" phase="selecting" dialog="settings"  />`;

export const Restart = () =>
  html`<eg-actions moves="2" difficulty="normal" phase="selecting" dialog="restart" />`;

  export const Lost = () =>
  html`<eg-actions moves="6" difficulty="hard" phase="lost" />`;
