import React, { Component } from "react"
// import History from "./history"
import "../css/style.css"

class Calculator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      input,
      btns,
      addElem,
      clear,
      equal,
      back,
      history,
      calc,
    } = this.props

    return (
      <div className="box">
        <div className="flex valueInput">
          <div className="history-text">{history}</div>
          <div className="input-text">{input}</div>
        </div>

        <div>
          {btns.map((item, key) => {
            if (item === "C") {
              return (
                <button onClick={clear.bind(this)} key={key} className="boxdiv">
                  {item}
                </button>
              )
            } else if (item === "=") {
              return (
                <button
                  onClick={equal.bind(this, input)}
                  key={key}
                  className="boxdiv2"
                >
                  {item}
                </button>
              )
            } else if (item === "b") {
              return (
                <button
                  onClick={back.bind(this, input)}
                  key={key}
                  className="boxdiv"
                >
                  {item}
                </button>
              )
            } else if (item === "^") {
              return (
                <button
                  onClick={addElem.bind(this, item)}
                  key={key}
                  className="boxdiv"
                >
                  x<sup>y</sup>
                </button>
              )
            } else if (item === ".") {
              return (
                <button
                  onClick={calc.bind(this, item)}
                  key={key}
                  className="boxdiv"
                >
                  .
                </button>
              )
            } else if (item === "?") {
              return (
                <button
                  style={{ visibility: "hidden" }}
                  onClick={addElem.bind(this, item)}
                  key={key}
                  className="boxdiv"
                >
                  ?
                </button>
              )
            } else {
              return (
                <button
                  onClick={addElem.bind(this, item)}
                  key={key}
                  className="boxdiv"
                >
                  {item}
                </button>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default Calculator
