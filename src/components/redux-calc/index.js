import React from "react"
import { connect, Provider } from "react-redux"
import Calculator from "./components/Calculator"
import store from "./store/store"
import { mapDispatchToProps, mapStateToProps } from "./actions/actions"

const Calc = connect(mapStateToProps, mapDispatchToProps)(Calculator)

export default function() {
  return (
    <>
      <Provider store={store}>
        <Calc />
      </Provider>
    </>
  )
}
