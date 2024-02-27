import React, { useState, useEffect } from 'react'
import ColorGenLogic from './hooks/ColorGenLogic.jsx'

const Home = () => {
  const [color, setColor] = useState('red')
  const [colors, setColors] = useState([])
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
                setColors(colorSet)
                console.log(colors)
              }}
            >
              get colors
            </button>
          </div>
          <h1>select a color</h1>
        </div>
        <div>
          <h1>our colors</h1>
          <div className="flex flex-row flex-wrap gap-4 text-center items-center justify-center">
            {colors.map((color, index) => {
              console.log(color, color.rgb[0])
              return (
                <div
                  className="h-[40px] w-[40px]"
                  style={{
                    backgroundColor: `rgb(${color.rgb[0]}, ${color.rgb[1]},${color.rgb[2]})`,
                  }}
                  key={index}
                ></div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
