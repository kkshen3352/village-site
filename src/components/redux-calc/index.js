import React from "react"
import { connect, Provider } from "react-redux"
import Calculator from "./components/Calculator"
// import store from "./store/store"
import { mapDispatchToProps, mapStateToProps } from "./actions/actions"
import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers/rootReducer"

const Calc = connect(mapStateToProps, mapDispatchToProps,)(Calculator)
const logMiddleWare = store => next => action => {
  console.log("Log Middleware:", action);
  next(action);
}
// const logIncrementMiddleware = store => next => action => {
//   if(action.type === 'EQUAL') {
//     console.log(`EQUAL triggered: ${JSON.stringify(store.getState())}`);
//   }
//   next(action);
// }
const store = createStore(reducer, applyMiddleware(logMiddleWare, 
  // logIncrementMiddleware
  ));

export default function() {
  return (
    <>
      <Provider store={store}>
        <Calc />
      </Provider>
    </>
  )
}
