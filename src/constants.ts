import * as types from "./types";

export const ALL_VALUES_ARRAY: types.value[] = ["a", "b", "c", "d", "e", "f"];
export const DIFFICULTY_ARRAY: types.difficulty[] = ["easy", "normal", "hard"];

export const DIFFICULTY_MAP: Record<types.difficulty, number> = {
  easy: 24,
  hard: 6,
  normal: 12,
}

export const COLOURS_MAP: Record<types.value, string> = {
  a: "yellow",
  b: "green",
  c: "orange",
  d: "gray",
  e: "red",
  f: 'purple'
};

export const VISUALS_MAP: Record<types.visual, Record<types.value, string>> = {
  characters: {
    a: "🧙‍♂️",
    b: "🧟‍♀️",
    c: "👨‍🚒",
    d: "🧛‍♀️",
    e: "👨‍🚀",
    f: "🧙‍♀️"
  },
  animals: {
    a: "🐱",
    b: "🐸",
    c: "🐵",
    d: "🐭",
    e: "🐷",
    f: "👾",
  },
  transport: {
    a: "🚕",
    b: "🚜",
    c: "🛵",
    d: "🚐",
    e: "🚒",
    f: "🚓"
  },
};
