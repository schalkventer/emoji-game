import { LitElement, html, css, CSSResultGroup, unsafeCSS } from 'lit'
import {customElement, property } from 'lit/decorators.js';
import * as types from '../helpers/types'
import { VALUES_ARRAY, COLOURS_MAP, VISUALS_MAP } from '../helpers/constants'

@customElement('mg-card')
export class Component extends LitElement {
    @property() value: types.value
    @property() visual: types.visual = 'animals'
    @property() phase: 'hidden' | 'flipped' | 'locked' = 'hidden';

    static styles: CSSResultGroup = css`
        * { box-sizing: border-box }

        button {
            font-family: var(--sl-font-sans);
            font-size: var(--sl-font-size-2x-large);
            font-weight: var(--sl-font-weight-bold);
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            background-color: var(--sl-color-blue-400);
            border: 1px solid var(--sl-color-blue-400);
            cursor: pointer;
            color: transparent;
            transform: scale(1);
            line-height: 1;
            transition: all var(--sl-transition-slow);
            padding-bottom: 0.25rem;
        }

        button:hover {
            transform: scale(1.1);
            box-shadow: var(--sl-shadow-small);
        }

        :host([phase="flipped"]) button {
            background-color: var(--sl-color-blue-100);
            border: 1px solid var(--sl-color-blue-20);
            color: var(--sl-color-blue-600);
            transform: scale(1.3);
            box-shadow: var(--sl-shadow-large);
        }

        ${unsafeCSS(VALUES_ARRAY.map((value) => {
            return `
                :host([phase="flipped"][value="${value}"]) button {
                    background-color: var(--sl-color-${COLOURS_MAP[value]}-100);
                    border: 1px solid var(--sl-color-${COLOURS_MAP[value]}-200);
                    color: var(--sl-color-${COLOURS_MAP[value]}-600);
                }   
            `
        }).join(''))}


        :host([phase="locked"]) button {
            background-color: transparent;
            color: var(--sl-color-blue-600);
            transform: scale(0.8);
            border-width: 0;
            opacity: 0.3;
            filter: grayscale(1)
        }        
        
        ${unsafeCSS(VALUES_ARRAY.map((value) => {
            return `
                :host([phase="locked"][value="${value}"]) button {
                    color: var(--sl-color-${COLOURS_MAP[value]}-600);
                }   
            `
        }).join(''))}

    `

    render() {
        const { phase, visual = 'character', value } = this
        if (!value) throw new Error('"value" is required')

        return html`
            <button .disabled="${phase !== 'hidden'}">${VISUALS_MAP[visual][value]}</button></div>
            `
    }
}
