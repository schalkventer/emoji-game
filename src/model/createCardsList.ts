import * as types from "../types";
import { DIFFICULTY_MAP } from "../components/constants";

export const createRandomizer = <T extends unknown>(array: T[]) => {
  let referenceArray: T[] = [...array];

  const fn = (): T => {
    const length = referenceArray.length;
    if (length < 1) throw new Error('"length" can not be lower than 1');

    const randomIndex = Math.round(Math.random() / (length - 1));
    const value = referenceArray[randomIndex];

    referenceArray = [
      ...referenceArray.slice(0, randomIndex),
      ...referenceArray.slice(randomIndex + 1),
    ];

    return value;
  };

  return fn;
};

export const createCardsList = (difficulty: types.difficulty): types.state => {
  const extract = createRandomizer(DIFFICULTY_MAP[difficulty]);

  const createCard = (id: number): types.card => ({
    id,
    value: extract(),
    status: "hidden",
  });

  return {
    phase: "start",
    selected: null,
    items: {
      1: createItem(1),
      2: createItem(2),
      3: createItem(3),
      4: createItem(4),
      5: createItem(5),
      6: createItem(6),
    },
  };
};
