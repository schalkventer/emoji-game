import { html } from "lit-html";
import { ALL_VALUES_ARRAY } from "../constants";
import "..";

export default {
  title: "eg-card",
};

export const Hidden = () => html`<eg-card phase="hidden" value="a" />`;
export const Flipped = () => html`<eg-card phase="flipped" value="a" />`;
export const Matched = () => html`<eg-card phase="matched" value="a" />`;

export const Animals = () => html`
  <div>
    ${ALL_VALUES_ARRAY.map(
      (value) =>
        html`<eg-card phase="flipped" visual="animals" value="${value}" />`
    )}
  </div>
`;

export const Characters = () => html`
  <div>
    ${ALL_VALUES_ARRAY.map(
      (value) =>
        html`<eg-card phase="flipped" visual="characters" value="${value}" />`
    )}
  </div>
`;

export const Transport = () => html`
  <div>
    ${ALL_VALUES_ARRAY.map(
      (value) =>
        html`<eg-card phase="flipped" visual="transport" value="${value}" />`
    )}
  </div>
`;
