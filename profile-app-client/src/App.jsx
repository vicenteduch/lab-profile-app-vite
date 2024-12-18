import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Router, Routes, Route} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
