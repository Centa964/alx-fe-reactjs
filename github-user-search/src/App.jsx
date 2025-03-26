import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>GitHub User Search</h1>
      <p>Let’s find us some GitHub users!</p>
    </>
  )
}

export default App;
