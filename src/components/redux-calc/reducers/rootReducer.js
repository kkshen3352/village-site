import { ADD_ELEM } from "../actions/actionsType"
import { CLEAR } from "../actions/actionsType"
import { EQUAL } from "../actions/actionsType"
import { BACK } from "../actions/actionsType"

const calcState = {
  value: 0,
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
  // console.log('state',state.value);
  // console.log('action.type',action.type);
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
    case BACK:
      return {
        ...state,
        value: state.value.substring(0, state.value.length - 1),
      }
    default:
      return state
  }
}
