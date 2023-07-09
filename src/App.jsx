import { useState } from 'react'
import BaristaForm from '../Components/BaristaForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className = "titleContainer">
        <h1 className = "title">On My Grind</h1>
        <p className = "description">So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App
