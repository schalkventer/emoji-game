import * as types from "../types";
import { ALL_VALUES_ARRAY } from "../constants";
import { mapValues } from 'lodash'

const VALUES = [...ALL_VALUES_ARRAY, ...ALL_VALUES_ARRAY];

const createCardsMock = (array: types.value[]) => {
  return array.reduce(
    (result, value, index) => ({
      ...result,
      [index + 1]: {
        id: index + 1,
        status: "hidden",
        value,
      },
    }),
    {}
  );
};

const CARDS: Record<number, types.card> = createCardsMock(VALUES);

export const START: types.state = {
  cards: CARDS,
  phase: 'start',
  selected: null,
  visual: 'characters',
  highscore: 3,
  moves: 1,
  difficulty: 'easy',
}

export const SELECTING: types.state = {
  ...START,
  phase: 'selecting',
  cards: {
    ...START.cards,
    7: { ...CARDS[7], status: "flipped" },
  }
}

export const NO_MATCH: types.state = {
  ...START,
  phase: 'no-match',
  cards: {
    ...START.cards,
    1: { ...CARDS[1], status: "flipped" },
    9: { ...CARDS[9], status: "flipped" },
  }
}

export const MATCH: types.state = {
  ...START,
  phase: 'match',
  cards: {
    ...START.cards,
    1: { ...CARDS[1], status: "matched" },
    7: { ...CARDS[7], status: "matched" },
  }
}

export const TWO_MATCH: types.state = {
  ...START,
  phase: 'match',
  cards: {
    ...START.cards,
    1: { ...CARDS[1], status: "matched" },
    7: { ...CARDS[7], status: "matched" },
    3: { ...CARDS[3], status: "matched" },
    9: { ...CARDS[9], status: "matched" },
  }
}


export const HIGHSCORE: types.state = {
  ...START,
  phase: 'highscore',
  cards: Object.entries(START.cards).reduce(
    (result, [key, card]) => ({
      ...result,
      [key]: {
        ...card,
        status: 'matched',
      },
    }), 
    {}
  )
}

export const WON: types.state = {
  ...START,
  phase: 'won',
  cards: Object.entries(START.cards).reduce(
    (result, [key, card]) => ({
      ...result,
      [key]: {
        ...card,
        status: 'matched',
      },
    }), 
    {}
  )
}


export const LOST: types.state = {
  ...START,
  phase: 'won',
  cards: Object.entries(START.cards).reduce(
    (result, [key, card]) => ({
      ...result,
      [key]: {
        ...card,
        status: 'matched',
      },
    }), 
    {}
  )
}