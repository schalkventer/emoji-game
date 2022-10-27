import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DIFFICULTY_MAP } from "../constants";
import { toggleDarkMode } from '../helpers'
import * as types from "../types";

@customElement("eg-actions")
export class Component extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    aside {
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

    sl-progress-ring {
      --size: 3rem;
    }

    sl-progress-ring[data-status="warning"] {
      --indicator-color: var(--sl-color-red-600);
    }
  `;

  @property() dialog: "none" | "settings" | "restart";
  @property() moves: number;
  @property() difficulty: types.difficulty;
  @property() phase: types.phase;
  @property() open: boolean = false;

    openSettings() {
      this.dialog = 'settings'
    }

    openRestart() {
      this.dialog = 'restart'
    }

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();

    ["moves", "difficulty", "phase"].forEach((attr) => {
      if (!this[attr]) throw new Error(`"${attr}" is required`);
    });
  }

  render() {
    const total = DIFFICULTY_MAP[this.difficulty];
    const remaining = total - this.moves;
    const percentage = (remaining / total) * 100;
    const status = remaining <= 3 ? "warning" : "resting";
    
    const isEnd =
      this.phase === "won" ||
      this.phase === "highscore" ||
      this.phase === "lost";

    return html`
      <sl-dialog
        label="New Game"
        class="dialog-overview"
        .open="${this.dialog === "restart"}"
      >
        <sl-select value="normal" label="Difficulty">
          <sl-menu-item value="easy">Easy</sl-menu-item>
          <sl-menu-item value="normal">Normal</sl-menu-item>
          <sl-menu-item value="hard">Hard</sl-menu-item>
        </sl-select>

        <sl-button slot="footer" variant="default">Cancel</sl-button>
        <sl-button slot="footer" variant="primary">Start Game</sl-button>
      </sl-dialog>

      <sl-dialog
        label="Settings"
        class="dialog-overview"
        .open="${this.dialog === "settings"}"
      >
        <sl-switch>Dark Mode</sl-switch>

        <sl-button slot="footer" variant="default">Cancel</sl-button>
        <sl-button slot="footer" variant="primary">Start Game</sl-button>
      </sl-dialog>

      <aside label="actions">
        <sl-progress-ring
          value="${percentage}"
          data-status="${status}"
          class="progress-ring-values"
          >${remaining}</sl-progress-ring
        >

        <ul>
          <li>
            <sl-button size="large" variant="default" @click="${this.openSettings}">Settings</sl-button>
          </li>

          <li>
            <sl-button
              @click="${this.openRestart}"
              size="large"
              variant="primary"
              .disabled="${this.phase === "start"}"
            >
              <span>${isEnd ? "New Game" : "Restart"}</span>
            </sl-button>
          </li>
        </ul>
      </aside>
    `;
  }
}
