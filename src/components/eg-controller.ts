import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as types from "../types";

@customElement("eg-controller")
export class Component extends LitElement {
  @property() cards: Record<number, types.card> = {};

  static styles = css`
    * {
      box-sizing: border-box;
    }

    h1 {
      font-family: var(--sl-font-sans);
      font-weight: var(--sl-font-weight-bold);
      font-size: var(--sl-font-size-3x-large);
      letter-spacing: var(--sl-letter-spacing-dense);
      color: var(--sl-color-gray-800);
      text-align: center;
      font-style: italic
    }

    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
    }

    aside {
      display: flex;
      justify-content: center;
      padding: 2rem 0 6rem;
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
  `;

  render() {
    return html`
      <div class="wrapper">
        <header>
          <h1>Emoji Game</h1>
        </header>

        <main>
          <mg-grid .cards="${this.cards}"></mg-grid>
        </main>

        <aside label="actions">
          <ul>
            <li>
              <sl-button size="large" variant="default">
                  <sl-icon slot="suffix" name="gear"></sl-icon>
                  Settings
              </sl-button>
            </li>

            <li>
              <sl-button size="large" variant="primary" disabled>
                <span>Reset</span>
              </sl-button>
            </li>
          </ul>
        </aside>
      </div>
    `;
  }
}
