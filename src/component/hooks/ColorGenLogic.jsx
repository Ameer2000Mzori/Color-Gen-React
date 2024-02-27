import React from 'react'
import Values from 'values.js'

const ColorGenLogic = (color) => {
  const colorSet = new Values(color).all(10)

  return colorSet
}

export default ColorGenLogic
