import { LitElement, html, css, CSSResultGroup, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as types from "../types";
import { ALL_VALUES_ARRAY, COLOURS_MAP, VISUALS_MAP } from "../constants";

@customElement("eg-card")
export class Component extends LitElement {
  @property() value: types.value;

  @property() visual: types.visual = "animals";

  @property() phase: "hidden" | "flipped" | "locked" = "hidden";

  static styles: CSSResultGroup = css`
    * {
      box-sizing: border-box;
    }

    button {
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-2x-large);
      font-weight: var(--sl-font-weight-bold);
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
      background-color: var(--sl-color-blue-400);
      border: 1px solid var(--sl-color-blue-400);
      cursor: pointer;
      color: transparent;
      transform: scale(1);
      line-height: 1;
      transition: all var(--sl-transition-slow);
      padding-bottom: 0.25rem;

      background-image:  linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777);
      
      background-size: 20px 35px;
      background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
    }

    button:hover {
      transform: scale(1.1);
      box-shadow: var(--sl-shadow-small);
    }

    :host([phase="flipped"]) button {
      background-color: var(--sl-color-blue-100);
      border: 1px solid var(--sl-color-blue-20);
      color: var(--sl-color-blue-600);
      transform: scale(1.1);
      box-shadow: var(--sl-shadow-large);
      background-image: none;
      cursor: not-allowed;
    }

    ${unsafeCSS(
      ALL_VALUES_ARRAY.map(
        (value) => `
                :host([phase="flipped"][value="${value}"]) button {
                    background-color: var(--sl-color-${COLOURS_MAP[value]}-100);
                    border: 1px solid var(--sl-color-${COLOURS_MAP[value]}-200);
                    color: var(--sl-color-${COLOURS_MAP[value]}-600);
                }   
            `
      ).join("")
    )}

    :host([phase="matched"]) button {
      background-color: transparent;
      color: var(--sl-color-blue-600);
      transform: scale(0.8);
      border-width: 0;
      opacity: 0.3;
      filter: grayscale(1);
      background-image: none;
      cursor: not-allowed;
    }

    ${unsafeCSS(
      ALL_VALUES_ARRAY.map(
        (value) => `
                :host([phase="locked"][value="${value}"]) button {
                    color: var(--sl-color-${COLOURS_MAP[value]}-600);
                }   
            `
      ).join("")
    )}
  `;

  render() {
    const { phase, visual = "character", value } = this;
    if (!value) throw new Error('"value" is required');

    return html`
            <button .disabled="${phase !== "hidden"}">${
      VISUALS_MAP[visual][value]
    }</button></div>
            `;
  }
}
