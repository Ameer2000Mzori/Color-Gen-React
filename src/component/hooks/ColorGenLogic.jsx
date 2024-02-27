import React from 'react'
import Values from 'values.js'

const ColorGenLogic = (color, setsOfColors) => {
  console.log(setsOfColors)
  const colorSet = new Values(color).all(Number(setsOfColors))

  return colorSet
}

export default ColorGenLogic
