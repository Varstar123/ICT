import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import State from './components/State'
import Count from './components/Count'
import Welcome from './components/Welcome'
import Card from './components/Card'
import Api from './components/Api'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>-=-=-=-=-M A T R I X-=-=-=-=-</h1>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/state" element={<State />} />
        <Route path="/count" element={<Count />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/card" element={<Card />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </>
  )
}

export default App
