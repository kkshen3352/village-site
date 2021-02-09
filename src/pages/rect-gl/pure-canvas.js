import React from "react"

class PureCanvas extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { width, height } = this.props
    return (
      <canvas
        width={width}
        height={height}
        ref={node => {
          return node ? this.props.contextRef(node.getContext("webgl")) : null
        }}
      />
    )
  }
}

export default PureCanvas
