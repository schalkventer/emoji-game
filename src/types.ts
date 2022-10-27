/**
 * ...
 */
export type phase = "config" | "start" | "selecting" | "no-match" | "match" | "end";

/**
 * ...
 */
export type value = "a" | "b" | "c" | "d" | "e" | 'f';

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
  visual: visual
  moves: number
  highscore: number
  difficulty: difficulty,
};

export type callback = (state: state) => void

export type options = {
  createCardsList?: () => cardsList,
}