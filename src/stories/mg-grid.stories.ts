import { html } from "lit-html";
import * as types from '../helpers/types'
import { VALUES_ARRAY } from '../helpers/constants'
import '../components'

export default {
  title: "mg-grid",
};

const EASY_VALUES = [...VALUES_ARRAY.slice(0, 3), ...VALUES_ARRAY.slice(0, 3)]
const VALUES = [...VALUES_ARRAY.slice(0, 4), ...VALUES_ARRAY.slice(0, 4)]
const HARD_VALUES = [...VALUES_ARRAY, ...VALUES_ARRAY]

const createCardsMock = (array: types.value[]) => {
  return array.reduce((result, value, index) => ({
    ...result,
    [index + 1]: {
      id: index + 1,
      status: 'hidden',
      value,
    }
  }), {})
}

const MOCK_CARDS: Record<number, types.card> = createCardsMock(VALUES)


export const Default = () => html`<mg-grid .cards="${MOCK_CARDS}" />`;
export const Easy = () => html`<mg-grid .cards="${createCardsMock(EASY_VALUES)}" />`;
export const Hard = () => html`<mg-grid .cards="${createCardsMock(HARD_VALUES)}" />`;


export const Selecting = () =>
  html`<mg-grid
    .cards="${{ ...MOCK_CARDS, 3: { ...MOCK_CARDS[3], status: "flipped" } }}"
  />`;

export const NoMatch = () =>
  html`<mg-grid
    .cards="${{
      ...MOCK_CARDS,
      3: { ...MOCK_CARDS[3], status: "flipped" },
      1: { ...MOCK_CARDS[1], status: "flipped" },
    }}"
  />`;

export const Match = () =>
  html`<mg-grid
    .cards="${{
      ...MOCK_CARDS,
      4: { ...MOCK_CARDS[4], status: "locked" },
      9: { ...MOCK_CARDS[9], status: "locked" },
    }}"
  />`;
