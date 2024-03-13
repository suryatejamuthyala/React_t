import { useState, useEffect } from 'react'

function App() {

  const [color, setColor] = useState("white")

  const click = color => {
    setColor(color)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])


  return (
    <div className="App">
      <button onClick={() => click("red")}>Red</button>
      <button onClick={() => click("green")}>Green</button>
      <button onClick={() => click("blue")}>Blue</button>
      <button onClick = {() => click("yellow")}>yellow</button>
    </div>
  )
}

export default App;