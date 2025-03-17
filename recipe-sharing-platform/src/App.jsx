import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
       <Router>
    <div className='text-blue-500 text-center text-2xl'>
      <h1>Recipe Sharing Platform</h1>
    </div>
     <div className='bg-gray-100 min-h-screen'>
      <HomePage />
     </div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
