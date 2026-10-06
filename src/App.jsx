import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={ <About /> } />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App