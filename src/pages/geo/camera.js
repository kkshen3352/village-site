import React from "react"
import Slider from "../../components/slider"

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x)
}

const Camera = ({
  lambda,
  phi,
  gamma,
  width,
  distance,
  // tilt,
  scale,
  onChange,
}) => {
  const _handleChnage = (name, value) => {
    console.log(name, value)
    return onChange(name, value)
  }
  const distanceScale = getBaseLog(2, distance)
  const theta = Math.acos(1 / distance)
  const size = ((distance - 1) / (distance - Math.cos(theta))) * Math.sin(theta)
  const scaleScale = ((Math.SQRT2 / (width - 2)) * size) / getBaseLog(2, scale)

  const _getDistance = value => Math.pow(2, value)
  const _getScale = value => {
    const thetas = Math.acos(1 / distance)
    const size =
      ((distance - 1) / (distance - Math.cos(thetas))) * Math.sin(thetas)
    return ((Math.pow(2, value) / size) * (width - 2)) / Math.SQRT2
  }
  return (
    <div>
      <Slider
        name={"lambda"}
        min={-180}
        max={180}
        value={lambda}
        defaultValue={0}
        onChange={value => _handleChnage("lambda", value)}
      />
      <Slider
        name={"phi"}
        min={-90}
        max={90}
        value={phi}
        defaultValue={0}
        onChange={value => {
          onChange("phi", value)
        }}
      />
      <Slider
        name={"gamma"}
        min={-180}
        max={180}
        value={gamma}
        defaultValue={0}
        onChange={value => onChange("gamma", value)}
      />
    </div>
  )
}

export default Camera
