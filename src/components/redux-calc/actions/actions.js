import { ADD_ELEM } from "./actionsType"
import { CLEAR } from "./actionsType"
import { EQUAL } from "./actionsType"
import { BACK } from "./actionsType"

export const mapStateToProps = state => {
  return {
    input: state.input,
    btns: state.btns,
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    addElem: text => {
      dispatch({
        type: ADD_ELEM,
        text,
      })
    },
    clear: () => {
      dispatch({
        type: CLEAR,
      })
    },
    equal: input => {
      dispatch({
        type: EQUAL,
        input,
      })
    },
    back: text => {
      dispatch({
        type: BACK,
        text,
      })
    },
  }
}
