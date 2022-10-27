import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as types from "../types";

@customElement("eg-board")
export class Component extends LitElement {
  @property() cards: Record<number, types.card> = {};
  @property() visual: types.visual = "animals";

  static styles = css`
    * {
      box-sizing: border-box;
    }

    div {
      display: flex;
      justify-content: center;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 20rem;
    }

    @media (min-width: 35rem) {
      ul {
        max-width: 30rem;
      }
    }

    li {
      max-width: ${100 / 3}%;
      width: 6.5rem;
      height: 6.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  render() {
    const array = Object.values(this.cards);

    return html`
      <div>
        <ul>
          ${array.map(
            ({ status, value }) =>
              html`<li>
                <eg-card phase="${status}" value="${value}"></eg-card>
              </li>`
          )}
        </ul>
      </div>
    `;
  }
}
