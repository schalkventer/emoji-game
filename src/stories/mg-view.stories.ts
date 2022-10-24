import { html } from "lit-html";
import * as types from '../helpers/types'
import { VALUES_ARRAY } from '../helpers/constants'
import '../components'

export default {
    title: 'mg-view'
}

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

const CARDS = createCardsMock([...VALUES_ARRAY, ...VALUES_ARRAY])

export const Default = () => html`<mg-view .cards="${CARDS}"></mg-view>`
