import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App