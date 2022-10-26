import * as types from "../types";
import { ALL_VALUES_ARRAY } from "../components/constants";

export const EASY_VALUES = [
  ...ALL_VALUES_ARRAY.slice(0, 3),
  ...ALL_VALUES_ARRAY.slice(0, 3),
];

export const VALUES = [
  ...ALL_VALUES_ARRAY.slice(0, 4),
  ...ALL_VALUES_ARRAY.slice(0, 4),
];

export const HARD_VALUES = [...ALL_VALUES_ARRAY, ...ALL_VALUES_ARRAY];

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

export const EASY_CARDS: Record<number, types.card> = createCardsMock(VALUES);
export const CARDS: Record<number, types.card> = createCardsMock(VALUES);
export const HARD_CARDS: Record<number, types.card> = createCardsMock(VALUES);
