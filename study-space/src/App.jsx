import React from 'react'
import './App.css'
import Intro from './Pages/Intro'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Forget from './Pages/Forget'
import Main from './Pages/Main'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
  )
}
export default App
