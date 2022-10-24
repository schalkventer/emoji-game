import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js';
import * as types from '../helpers/types'

@customElement('mg-grid')
export class Component extends LitElement {
    @property() cards: Record<number, types.card> = {};
    @property() visual: types.visual = 'animals'

    static styles = css`
        * { box-sizing: border-box }

        div {
            max-width: 20rem;
            margin: 0 auto
        }

        @media (min-width: 25rem) {
            div {
                max-width: 40rem;
                margin: 0 auto
            }  
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        li {
            max-width: ${100 / 2}%;
            width: 7rem;
            height: 7rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `
    
    render() {
        const array = Object.values(this.cards)

        return html`
            <div>
                <ul>
                    ${array.map(({ status, value }) => html`<li><mg-card phase="${status}" value="${value}"></mg-card></li>`)}
                </ul>
            </div>
        `
    }
}
