import { html } from "lit-html";
import { VALUES_ARRAY } from "../components/constants";
import "../components";

export default {
  title: "mg-card",
};

export const Hidden = () => html`<mg-card phase="hidden" value="a" />`;
export const Flipped = () => html`<mg-card phase="flipped" value="a" />`;
export const Locked = () => html`<mg-card phase="locked" value="a" />`;

export const Animals = () => html`
  <div>
    ${VALUES_ARRAY.map(
      (value) =>
        html`<mg-card phase="flipped" visual="animals" value="${value}" />`
    )}
  </div>
`;

export const Characters = () => html`
  <div>
    ${VALUES_ARRAY.map(
      (value) =>
        html`<mg-card phase="flipped" visual="characters" value="${value}" />`
    )}
  </div>
`;

export const Transport = () => html`
  <div>
    ${VALUES_ARRAY.map(
      (value) =>
        html`<mg-card phase="flipped" visual="transport" value="${value}" />`
    )}
  </div>
`;
