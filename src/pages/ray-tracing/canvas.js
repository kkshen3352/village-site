import { mat4 } from "gl-matrix"
import React from "react"
import PureCanvas from "./pure-canvas"
import render from "./render"

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.saveContext = this.saveContext.bind(this)
    this.width = 500
    this.height = 500
  }

  saveContext(gl) {
    this.gl = gl
  }

  componentDidUpdate() {
    const { angle } = this.props
    render(this.gl)
  }

  render() {
    return <PureCanvas contextRef={this.saveContext} width="400" height="200" />
  }
}

export default Canvas
