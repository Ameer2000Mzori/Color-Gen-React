import React, { useState } from 'react'
import ColorGenLogic from './hooks/ColorGenLogic.jsx'

const Home = () => {
  const [color, setColor] = useState()
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
