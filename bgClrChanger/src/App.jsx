import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div style={{ backgroundColor: color,
      width: "100vw",
      height: "100vh",
    }}>
      <button onClick={
        () => {
          setColor("red")
        }
      }>
        Red
      </button>
      <button onClick={
        () => {
          setColor("blue")
        }
      }>
        Blue
      </button>
      <button onClick={
        () => {
          setColor("yellow")
        }
      }>
        Yellow
      </button>
      <button onClick={
        () => {
          setColor("pink")
        }
      }>
        Pink
      </button>
      <button onClick={
        () => {
          setColor("turquoise")
        }
      }>
        Turquoise
      </button>
      <button onClick={
        () => {
            setColor("brown")
        }
      }>
        Brown
      </button>
    </div>
  )
}

export default App
