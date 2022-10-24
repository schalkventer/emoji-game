import * as types from '../helpers/types'

export const VALUES_ARRAY: types.value[] = ['a', 'b', 'c', 'd', 'e']
export const DIFFICULTY_ARRAY: types.difficulty[] = ['easy', 'normal', 'hard']

export const DIFFICULTY_MAP: Record<types.difficulty, number> = {
    easy: 6,
    normal: 8,
    hard: 10,
}

export const COLOURS_MAP: Record<types.value, string> = {
    a: 'yellow',
    b: 'green',
    c: 'orange',
    d: 'gray',
    e: 'red',
}

export const VISUALS_MAP: Record<types.visual, Record<types.value, string>> = {
    characters: {
        a: '🧙‍♂️',
        b: '🧟‍♀️',
        c: '👨‍🚒',
        d: '🧛‍♀️',
        e: '🧙‍♀️',
    },
    animals: {
        a: '🐱',
        b: '🐸',
        c: '🐵',
        d: '🐭',
        e: '🐷'
    },
    transport: {
        a: '🚕',
        b: '🚜',
        c: '🛵',
        d: '🚐',
        e: '🚒',
    },
}

