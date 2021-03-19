import { ADD_ELEM } from "../actions/actionsType"
import { CLEAR } from "../actions/actionsType"
import { EQUAL } from "../actions/actionsType"
import { BACK } from "../actions/actionsType"

const calcState = {
  input: 0,
  btns: [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "00",
    "0",
    ".",
    "+",
    "C",
    "b",
    "=",
  ],
}

export default function(state = calcState, action) {
  switch (action.type) {
    case ADD_ELEM:
      if (state.input.length === 13) {
        return {
          ...state,
          input: 0,
        }
      } else {
        return {
          ...state,
          input: state.input === 0 ? action.text : state.input + action.text,
        }
      }

    case CLEAR:
      return {
        ...state,
        input: 0,
      }
    case EQUAL:
      return {
        ...state,
        input: eval(action.input),
      }
    case BACK:
      if (state.input.length > 1) {
        return {
          ...state,
          input: state.input.substring(0, state.input.length - 1),
        }
      } else {
        return {
          ...state,
          input: 0,
        }
      }

    default:
      return state
  }
}
