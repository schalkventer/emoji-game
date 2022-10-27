import { toggleDarkMode } from './helpers'
import "@lottiefiles/lottie-player";

import '@shoelace-style/shoelace'
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';

import './components/eg-card'
import './components/eg-board'
import './components/eg-view'
import './components/eg-actions'

const COMPONENTS = ['lottie-player', 'sl-icon', 'sl-button', 'sl-dialog', 'sl-select', 'sl-menu-item', 'eg-card', 'eg-board', 'eg-view', 'eg-actions']

COMPONENTS.forEach(tag => {
    if (!customElements.get(tag)) throw new Error(`"${tag}" is not registered as a custom element`)
})

const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
darkMode.addEventListener("change", event => toggleDarkMode(event.matches));
