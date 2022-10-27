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
    }

    header {
      box-shadow: var(--sl-shadow-x-large);
      background: white;
      padding: 1rem 0 0.5rem;
      width: 100%;
      font-family: var(--sl-font-sans);
      color: var(--sl-color-gray-800);
      text-align: center;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      align-items: center;
      overflow-x: hidden;
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

    p {
      margin: 0;
      font-size: var(--sl-font-size-large);
      font-weight: bold;
      color: var(--sl-color-blue-500);
    }

    p:last-of-type {
      font-size: var(--sl-font-size-x-small);
      padding-bottom: 0.5rem;
      font-weight: normal;
      color: var(--sl-color-blue-200);
    }

    sl-progress-ring {
      --size: 50px;
    }
  `;

  render() {
    return html`
      <div class="wrapper">
      <!-- <sl-progress-bar value="50" label="Upload progress"></sl-progress-bar> -->
        <main>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_obhph3sh.json"  background="transparent"  speed="0.5"  style="width: 300px; height: 300px;"    autoplay>

          <eg-board .cards="${this.state.cards}"></eg-board>
        </main>

        <aside label="actions">
          
        </aside>
      </div>
    `;
  }
}
