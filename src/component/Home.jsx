import React, { useState } from 'react'
import ColorGenLogic from './hooks/ColorGenLogic.jsx'
import Values from 'values.js'
const Home = () => {
  const [color, setColor] = useState()

  console.log(new Values(color).all(10))
  return (
    <>
      <div>
        <div>
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Home
