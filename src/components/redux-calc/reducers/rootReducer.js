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
  // console.log('state',state.input);
  // console.log('action.type',action.type);
  switch (action.type) {
    case ADD_ELEM:
      return {
        ...state,
        input: state.input === 0 ? action.text : state.input + action.text,
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
      return {
        ...state,
        input: state.input.substring(0, state.input.length - 1),
      }
    default:
      return state
  }
}
