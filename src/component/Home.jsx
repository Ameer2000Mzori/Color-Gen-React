import React, { useState, useEffect } from 'react'
import ColorGenLogic from './hooks/ColorGenLogic.jsx'

const Home = () => {
  const [color, setColor] = useState('red')
  const [colorsSets, setColorsSets] = useState(10)
  const [colors, setColors] = useState([])
  return (
    <>
      <div className="flex flex-col text-center items-center justify-center h-[100vh] w-[100vw] p-4">
        <div className="h-[10%] w-[100%] flex flex-row text-center items-center justify-center gap-4">
          <div className="flex flex-row text-center items-center justify-center gap-4">
            <input
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
            <input
              type="number"
              value={colorsSets}
              onChange={(e) => {
                setColorsSets(e.target.value)
              }}
              placeholder="min=  1 / max = 100"
              min={1}
              max={100}
            />
            <button
              className="w-[100px] h-[40px] bg-zinc-400 rounded-sm text-white"
              onClick={() => {
                if (colorsSets > 100 || colorsSets < 0) {
                  alert('min=  1 / max = 100')
                  return
                } else {
                  let colorSet = ColorGenLogic(color, colorsSets)
                  setColors(colorSet)
                }
              }}
            >
              get colors
            </button>
          </div>
        </div>
        <div className="w-[100%] h-[90%] flex flex-col text-center items-center justify-start p-4 m-4">
          <h1>our colors</h1>
          <div className=" w-[60%] flex flex-row flex-wrap gap-4 text-center items-center justify-center">
            {colors.map((color, index) => {
              return (
                <div
                  onClick={(e) => {
                    let colorVal = e.currentTarget.getAttribute('data-colorval')
                    navigator.clipboard.writeText(colorVal)
                  }}
                  data-colorval={`rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`}
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
