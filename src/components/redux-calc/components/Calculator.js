import React, { Component } from "react"
import "../css/style.css"

class Calculator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, btns, addElem, clear, equal } = this.props
    return (
      <div className="box">
        <div>
          <input type="text" value={value} className="value" />
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
                  onClick={equal.bind(this, value)}
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
