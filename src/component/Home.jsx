import React, { useState, useEffect } from 'react'
import ColorGenLogic from './hooks/ColorGenLogic.jsx'

const Home = () => {
  const [color, setColor] = useState('red')

  return (
    <>
      <div>
        <div>
          <div>
            <input
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
            <button
              onClick={() => {
                let colorSet = ColorGenLogic(color)
                console.log(colorSet)
              }}
            >
              get colors
            </button>
          </div>
          <h1>select a color</h1>
        </div>
      </div>
    </>
  )
}

export default Home
