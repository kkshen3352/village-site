import { ADD_ELEM } from "../actions/actionsType"
import { CLEAR } from "../actions/actionsType"
import { EQUAL } from "../actions/actionsType"

const calcState = {
  value: 0,
  btns: [
    "7",
    "8",
    "9",
    "C",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "+",
    "-",
    "=",
  ],
}

export default function(state = calcState, action) {
  switch (action.type) {
    case ADD_ELEM:
      return {
        ...state,
        value: state.value === 0 ? action.text : state.value + action.text,
      }
    case CLEAR:
      return {
        ...state,
        value: 0,
      }
    case EQUAL:
      return {
        ...state,
        value: eval(action.value),
      }
    default:
      return state
  }
}
