import * as types from "../types";

/**
 * ...
 */
export const flip = (items: types.cardsList, key: number): types.cardsList => {
  return {
    ...items,
    [key]: {
      ...items[key],
      status: "flipped",
    },
  };
};

export const select = (id: number, state: types.state): types.state => {
    if (state.selected === id) return state;

    switch (state.phase) {
      case "start":
        return {
          ...state,
          phase: "selecting",
          cards: flip(state.cards, id),
        };

      case "selecting": {
        if (!state.selected) throw new Error('"selected" is required');
        const selectedValue = state.cards[state.selected].value;
        const idValue = state.cards[id].value;

        if (selectedValue !== idValue) {
          return {
            ...state,
            phase: "no-match",
            cards: flip(state.cards, id),
          };
        }

        return {
          ...state,
          phase: "match",
          cards: {
            ...state.cards,
            [state.selected]: {
              ...state.cards[state.selected],
              status: "matched",
            },
            [id]: {
              ...state.cards[id],
              status: "matched",
            },
          },
        };
      }

      case "no-match": {
        const clearedCards = Object.entries(state.cards).reduce(
          (result, [key, singleCard]) => {
            if (singleCard.status !== "flipped")
              return {
                ...result,
                [key]: singleCard,
              };

            return {
              ...singleCard,
              status: "hidden",
            };
          },
          {}
        );

        return {
          ...state,
          phase: "no-match",
          cards: flip(clearedCards, id),
        };
      }

      case "start":
        return {
          ...state,
          phase: "selecting",
          cards: flip(state.cards, id),
        };

      default:
        throw new Error("Invalid phase");
    }
  };
