import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { DIFFICULTY_MAP } from "../constants";
import { toggleDarkMode } from "../helpers";
import * as types from "../types";

@customElement("eg-actions")
export class Component extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    .wrapper {
      width: 100%;
      padding: 0.5rem;
      background: white;
      box-shadow: var(--sl-shadow-x-large);
      display: flex;
      text-align: center;
      justify-content: center;
      justify-content: space-between;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }

    li {
      padding: 0.25rem;
    }

    .field {
      padding-bottom: 1rem;
    }

    h2 {
      font-size: var(--sl-font-size-3x-large);
      margin: 0 0 2rem;
    }

    sl-progress-ring {
      --size: 3rem;
    }

    sl-progress-ring[data-status="warning"] {
      --indicator-color: var(--sl-color-red-600);
    }
  `;

  @property() moves: number;
  @property() difficulty: types.difficulty;
  @property() phase: types.phase;
  @property() open: boolean = false;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();

    ["moves", "difficulty", "phase"].forEach((attr) => {
      if (!this[attr]) throw new Error(`"${attr}" is required`);
    });
  }

  toggleRestart() {
    const dialog: any | undefined = this.shadowRoot.querySelector('#restart')
    if (!dialog) throw new Error('"dialog" is required')
    if (dialog.open) return dialog.hide()
    dialog.show()
  }

  toggleSettings() {
    const dialog: any | undefined = this.shadowRoot.querySelector('#settings')
    if (!dialog) throw new Error('"dialog" is required')
    if (dialog.open) return dialog.hide()
    dialog.show()
  }

  render() {
    const total = DIFFICULTY_MAP[this.difficulty];
    const remaining = total - this.moves;
    const percentage = (remaining / total) * 100;
    const status = remaining <= 3 ? "warning" : "resting";

    return html`
      <sl-dialog no-header id="restart">
        Note that starting a new game will will forfeit the current game.
        <sl-button slot="footer" variant="default" @click="${this.toggleRestart}"
          >Cancel</sl-button
        >
        <sl-button slot="footer" variant="primary">Confirm</sl-button>
      </sl-dialog>

      <sl-dialog
        no-header
        id="settings"
      >
        <h2>Settings</h2>
          <sl-select class="field" value="characters" label="Icons">
            <sl-menu-item value="characters">Characters</sl-menu-item>
            <sl-menu-item value="animals">Animals</sl-menu-item>
            <sl-menu-item value="transport">Transport</sl-menu-item>
          </sl-select>

          <sl-select class="field" value="auto" label="Theme">
            <sl-menu-item value="auto">Auto</sl-menu-item>
            <sl-menu-item value="light">Light</sl-menu-item>
            <sl-menu-item value="dark">Dark</sl-menu-item>
          </sl-select>
        </div>

        <sl-button slot="footer" variant="default" @click="${this.toggleSettings}">Close</sl-button>
      </sl-dialog>

      <div class="wrapper">
        <sl-progress-ring
          value="${percentage}"
          data-status="${status}"
          class="progress-ring-values"
          >${remaining}</sl-progress-ring
        >

        <ul>
          <li>
            <sl-button
              size="large"
              variant="default"
              @click="${this.toggleSettings}"
              >Settings</sl-button
            >
          </li>

          <li>
            <sl-button
              @click="${this.toggleRestart}"
              size="large"
              variant="primary"
              .disabled="${this.phase === "start"}"
            >
              <span>${this.phase === 'end' ? "New Game" : "Restart"}</span>
            </sl-button>
          </li>
        </ul>
      </div>
    `;
  }
}
