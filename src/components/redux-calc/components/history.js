import React, { Component } from "react"
// import "../css/style.css"

class History extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { history } = this.props
    return (
      <div>
        <span>{history}</span>
      </div>
    )
  }
}
export default History
