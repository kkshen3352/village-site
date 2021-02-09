import React from "react"
import Canvas from "./canvas"

class Animation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cubeRotation: 0 }
    this.updateAnimationState = this.updateAnimationState.bind(this)
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  updateAnimationState() {
    this.setState(prevState => ({
      cubeRotation: prevState.cubeRotation + 0.01,
    }))
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF)
  }

  render() {
    return <Canvas cubeRotation={this.state.cubeRotation} />
  }
}

export default Animation
