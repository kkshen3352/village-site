import { active } from "d3-transition"
import { round } from "mathjs"
import { ADD_ELEM } from "../actions/actionsType"
import { CLEAR } from "../actions/actionsType"
import { EQUAL } from "../actions/actionsType"
import { BACK } from "../actions/actionsType"
// import { CALC } from "../actions/actionsType"

const calcState = {
  input: 0,
  history: "",
  btns: [
    "?",
    "?",
    "?",
    "C",
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
    "^",
    "b",
    "=",
  ],
}

export default function(state = calcState, action) {
  console.log("input", state.input)
  console.log("act", action.input)
  const maths = eval(action.input)
  switch (action.type) {
    case ADD_ELEM:
      if (state.input.length === 13) {
        return {
          ...state,
          input: 0,
          history: 0,
        }
      } else if (state.input === 0) {
        return {
          ...state,
          input:
            state.input === 0 ? action.text - state.input : round(maths, 4),
          history: state.input === 0 ? action.text - state.input : action.text,
        }
      } else {
        return {
          ...state,
          input: state.input === 0 ? action.text : state.input + action.text,
          history: state.input === 0 ? action.text : state.input + action.text,
        }
      }
    case CLEAR:
      return {
        ...state,
        input: 0,
        history: "",
      }
    case EQUAL:
      if (state.input.length < 1) {
        return {
          ...state,
          history: state.input + "=",
        }
      } else if (state.input.indexOf("^") === 1) {
        const SQUARES = eval(action.input.replace("^", "**"))
        return {
          ...state,
          input: SQUARES,
        }
      } else {
        return {
          ...state,
          input: round(maths, 4),
        }
      }
    case BACK:
      if (state.input.length > 1) {
        return {
          ...state,
          input: state.input.substring(0, state.input.length - 1),
          history: state.input.substring(0, state.input.length - 1),
        }
      } else {
        return {
          ...state,
          input: 0,
          history: "",
        }
      }
    // case SQUARE:
    //   return {
    //     ...state,
    //     input: state.input + action.text,
    //   }

    default:
      return state
  }
}
