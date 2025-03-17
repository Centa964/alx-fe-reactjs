import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className='text-blue-500 text-center text-2xl'>
      <h1>Recipe Sharing Platform</h1>
    </div>
     <div className='bg-gray-100 min-h-screen'>
      <HomePage />
     </div>
    </>
  )
}

export default App
