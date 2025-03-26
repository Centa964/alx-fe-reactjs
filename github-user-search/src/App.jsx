import { useState } from 'react'
import './App.css'
import Search from './components/Search';


function App() {
  return (
    <>
      <h1>GitHub User Search</h1>
      <p>Let’s find us some GitHub users!</p>
      <Search/>
    </>
    
  )
}

export default App;
