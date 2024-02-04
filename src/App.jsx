import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateListing from './pages/CreateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'

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
        <Route path='/create-listing' element={<CreateListing/>}/>
        <Route path='/listing/:listingId' element={<Listing/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/*' element={<Home/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App