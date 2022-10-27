import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as types from "../types";

@customElement("eg-view")
export class Component extends LitElement {
  @property() state: types.state;

  static styles = css`
    * {
      box-sizing: border-box;
    }

    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      flex-direction: column;
    }

    .config {
      width: 20rem;
      padding: 2rem;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      align-items: center;
      overflow-x: hidden;
    }

    h1 {
      margin: 0;
    }

    aside {
      width: 100%;
    }
  `;

  render() {
    if (this.state.phase === "config") {
      return html`<div>
        <div class="wrapper">
          <main>
            <h1>🎰 Emoji Game</h1>

            <div class="config">
              <sl-select value="normal" label="Difficulty">
                <sl-menu-item value="easy">Easy</sl-menu-item>
                <sl-menu-item value="normal">Normal</sl-menu-item>
                <sl-menu-item value="hard">Hard</sl-menu-item>
              </sl-select>
            </div>

            <sl-button variant="primary">Start Game</sl-button>
          </main>
        </div>
      </div>`;
    }

    if (this.state.phase === "end") {
      return html`<eg-end moves="${this.state.moves}" highscore="${this.state.highscore}"></eg-end>`;
    }

    return html`
      <div class="wrapper">
        <main>
          <eg-board .cards="${this.state.cards}"></eg-board>
        </main>

        <aside>
          <eg-actions
            moves="${this.state.moves}"
            difficulty="${this.state.difficulty}"
            phase="${this.state.phase}"
          ></eg-actions>
        </aside>
      </div>
    `;
  }
}

//
