import React, { useState } from "react"
import "./style.css"
import { ConfigureStore } from "redux"

const ReduxCalculator = ConfigureStore => {
  const [clickNum, setCounter] = useState("")

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <>
      <div className="box">
        <form>
          <input className="value" value={clickNum} />
          {/*數字*/}
          <button className="boxdiv" onClick={() => this.clickNum("7")}>
            7
          </button>
          <button className="boxdiv" onClick={() => this.clickNum("8")}>
            8
          </button>
          <button className="boxdiv" onClick={() => this.clickNum("9")}>
            9
          </button>
          {/*運算符*/}
          <button className="boxdiv" onClick={() => this.clickOperator("+")}>
            +
          </button>
          {/*數字*/}
          <button className="boxdiv" onClick={() => this.clickNum("4")}>
            4
          </button>
          <button className="boxdiv" onClick={() => this.clickNum("5")}>
            5
          </button>
          <button className="boxdiv" onClick={() => this.clickNum("6")}>
            6
          </button>
          {/*運算符*/}
          <button className="boxdiv" onClick={() => this.clickOperator("-")}>
            -
          </button>
          {/*數字*/}
          <button className="boxdiv" onClick={() => this.clickNum("1")}>
            1
          </button>
          <button className="boxdiv" onClick={() => this.clickNum("2")}>
            2
          </button>
          <button className="boxdiv" onClick={() => this.clickNum("3")}>
            3
          </button>
          {/*運算符*/}
          <button className="boxdiv" onClick={() => this.clickOperator("*")}>
            *
          </button>
          <button className="boxdiv" onClick={() => this.clickNum("0")}>
            0
          </button>
          <button className="boxdiv" onClick={() => this.decimal(".")}>
            .
          </button>
          {/*等號*/}
          <button className="boxdiv" onClick={increment}>
            =
          </button>
          {/*運算符*/}
          <button className="boxdiv" onClick={() => this.clickOperator("/")}>
            /
          </button>
          <button className="boxdiv" onClick={() => this.clickOperator("C")}>
            C
          </button>
          {/*退格*/}
          <button className="boxdiv" onClick={() => this.back("B")}>
            B
          </button>
        </form>
      </div>
    </>
  )
}

export default ReduxCalculator
