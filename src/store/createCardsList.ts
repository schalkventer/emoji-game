import * as types from "../types";
import { ALL_VALUES_ARRAY } from '../constants'

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

export const createCardsList = (): types.cardsList => {
  const extract = createRandomizer([ ...ALL_VALUES_ARRAY, ...ALL_VALUES_ARRAY ]);

  const createCard = (id: number): types.card => ({
    id,
    value: extract(),
    status: "hidden",
  });

  const cards: types.cardsList = [1,2,3,4,5,6,7,8,9].reduce((result, id) => ({
    ...result,
    [id]: createCard(id)
  }), {})

  return cards
}
