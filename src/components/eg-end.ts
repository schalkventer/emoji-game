import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as types from "../types";

@customElement("eg-end")
export class Component extends LitElement {
  @property() highscore: number;
  @property() moves: number;

  static styles = css`
    * {
      box-sizing: border-box;
    }

    h1 {
      margin: 0;
    }

    p {
      margin: 0;
      font-size: var(--sl-font-size-large);
      font-weight: bold;
      color: var(--sl-color-gray-400);
    }

    span {
      font-size: var(--sl-font-size-2x-large);
    }

    .fail {
      color: var(--sl-color-red-600);
    }

    .won {
      color: var(--sl-color-green-600);
    }

    @keyframes fade {
      0% {
        opacity: 0;
        transform: scale(0) translateY(5rem);
      }
      25% {
        opacity: 0.5;
        transform: scale(1.25) translateY(-1rem);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    .fade {
      animation-name: fade;
      animation-duration: 2s;
      text-align: center;
    }

    .wrapper {
      height: 100vh;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    lottie-player {
      width: 60vw;
      height: 60vw;
      z-index: -1;
      position: absolute;
      left: calc(50% - 30vw);
      top: calc(50% - 30vw);
    }

    sl-button {
      margin-top: 1rem;
    }
  `;

  render() {
    const hasLost = this.moves < 1;
    const isNewHighscore = this.moves > this.highscore;

    if (hasLost) {
      return html`
        <div class="wrapper">
          <div class="fade">
            <h1>You Lost</h1>
            <p class="fail">No moves left</p>

            <sl-button variant="primary">Try Again</sl-button>
          </div>
        </div>
      `;
    }

    return html`
      <div class="wrapper">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_obhph3sh.json"
          background="transparent"
          speed="0.5"
          autoplay
        ></lottie-player>

        <div class="fade">
          <h1>You Won</h1>

          ${isNewHighscore
            ? html`<p class="won">New Highscore: ${this.moves}</p>`
            : html`<p>Current Highscore: ${this.highscore}</p>`}

          <sl-button variant="primary">Play Again</sl-button>
        </div>
      </div>
    `;
  }
}
