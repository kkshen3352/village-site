import React from "react"
import "./style.css"

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      prevInput: "",
      operator: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickNum = this.clickNum.bind(this)
    this.getCount = this.getCount.bind(this)
    this.decimal = this.decimal.bind(this)
    this.back = this.back.bind(this)
  }
  //打印
  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }
  //數字鍵
  clickNum(count) {
    this.setState(state => ({
      input: state.input + count,
    }))
  }
  //小數點
  decimal() {
    const { input } = this.state
    if (input.indexOf(".") > -1) {
    } else {
      this.setState({
        input: input + ".",
      })
    }
  }
  //退格
  back() {
    const { input } = this.state
    this.setState({
      input: input.substring(0, input.length - 1),
    })
  }
  //運算符
  clickOperator(operator) {
    const { input } = this.state
    this.setState({
      input: "",
      prevInput: input,
      operator,
    })
  }
  //onClick
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input,
    })
  }
  //計算
  getCount() {
    const { input, prevInput, operator } = this.state
    switch (operator) {
      case "+":
        this.setState({
          input: Number(prevInput) + Number(input),
          prevInput: "",
        })
        break
      case "-":
        this.setState({
          input: Number(prevInput) - Number(input),
          prevInput: "",
        })
        break
      case "*":
        this.setState({
          input: Number(prevInput) * Number(input),
          prevInput: "",
        })
        break
      case "/":
        this.setState({
          input: Number(prevInput) / Number(input),
          prevInput: "",
        })
        break
      case "B":
        this.setState({
          input: input.substring(0, input.length - 1),
        })
        break
      case "C":
        this.setState({
          input: 0,
        })
        break

      default:
        return
    }
  }
  render() {
    return (
      <div className="box">
        {/*<h1>{this.state.input}</h1>*/}
        <form onClick={this.handleSubmit}>
          <input
            className="value"
            value={this.state.input}
            onChange={this.handleChange}
          />
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
          <button className="boxdiv" onClick={this.getCount}>
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
    )
  }
}
