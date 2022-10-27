import { html } from "lit-html";
import "..";

export default {
  title: "eg-end",
};

export const Lost = () => html`<eg-end moves="0" highscore="5"></eg-end>`;
export const Won = () => html`<eg-end moves="3" highscore="5"></eg-end>`;
export const Highscore = () => html`<eg-end moves="6" highscore="5"></eg-end>`;
