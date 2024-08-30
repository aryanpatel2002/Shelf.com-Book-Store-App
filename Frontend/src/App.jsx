import React from 'react'
import Home from './home/home'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {

  const[authUser,setAuthUser]=useAuth()
  console.log(authUser)


  return (
  <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/signup" />}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
  </Routes>
  <Toaster/>
  </div>
  </>
  )
}

export default App
