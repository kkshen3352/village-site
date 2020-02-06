import React, { useState } from "react"

const Slider = ({
  name,
  min,
  max,
  step = "any",
  value,
  defaultValue,
  onChange,
}) => {
  const [valueState, setValue] = useState(value || defaultValue)
  const onChangeValue = event => {
    const newValue = event.target.value
    setValue(newValue)
    onChange(newValue)
  }
  console.log(value, defaultValue, valueState)
  return (
    <label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={valueState}
        onChange={onChangeValue}
      />
      {`${name}=${value}`}
    </label>
  )
}

export default Slider
