import React, { Component } from "react"
import "../css/style.css"

class Calculator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { input, btns, addElem, clear, equal, back } = this.props
    return (
      <div className="box">
        <div className="valueInput">{input}</div>
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
                  className="boxdiv"
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
