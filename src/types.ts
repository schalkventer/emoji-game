/**
 * ...
 */
export type phase = "start" | "selecting" | "no-match" | "match" | "finished";

/**
 * ...
 */
export type value = "a" | "b" | "c" | "d" | "e";

/**
 * ...
 */
export type status = "hidden" | "flipped" | "matched";

/**
 * ...
 */
export type visual = "animals" | "characters" | "transport";

/**
 * ...
 */
export type difficulty = "easy" | "normal" | "hard";

/**
 * ...
 */
export type card = {
  id: number;
  value: value;
  status: status;
};

/**
 * ...
 */
export type cardsList = Record<number, card>;

/**
 * ...
 */
export type state = {
  phase: phase;
  selected: null | number;
  cards: cardsList;
};
