import { html } from "lit-html";
import * as state from "./state";
import "..";

export default {
  title: "eg-view",
};

export const Config = () => html`<eg-view .state="${state.CONFIG}"></eg-view>`;
export const Start = () => html`<eg-view .state="${state.START}"></eg-view>`;
export const Selecting = () => html`<eg-view .state="${state.SELECTING}"></eg-view>`;
export const NoMatch = () => html`<eg-view .state="${state.NO_MATCH}"></eg-view>`;
export const Match = () => html`<eg-view .state="${state.MATCH}"></eg-view>`;
export const TwoMatch = () => html`<eg-view .state="${state.TWO_MATCH}"></eg-view>`;
export const Highscore = () => html`<eg-view .state="${state.HIGHSCORE}"></eg-view>`;
export const Won = () => html`<eg-view .state="${state.WON}"></eg-view>`;
export const Lost = () => html`<eg-view .state="${state.LOST}"></eg-view>`;

