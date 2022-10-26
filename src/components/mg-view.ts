import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as types from "../types";

@customElement("mg-view")
export class Component extends LitElement {
  @property() cards: Record<number, types.card> = {};

  static styles = css`
    * {
      box-sizing: border-box;
    }

    h1 {
      font-family: var(--sl-font-sans);
      text-align: center;
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

        <div>asdas</div>
      </div>
    `;
  }
}
