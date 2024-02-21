import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const {currentUser}=useSelector(state=>state.user)
  const [searchTerm,setSearchTerm]=useState('')
  const navigate=useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const urlParams=new URLSearchParams(window.location.search);
    urlParams.set('searchTerm',searchTerm);
    const searchQuery=urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }

  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    const searchTermFromUrl=urlParams.get('searchTerm')
    if(searchTermFromUrl){
      setSearchTerm(searchTermFromUrl)
    }
  },[location.search])
  
  return (
    <div className='w-100'>
<Navbar expand="lg" className="bg-red-800 border-bottom p-2" fixed='top'>
      <Container>
        <Navbar.Brand><Link to='/' className='text-decoration-none'><span className='text-violet-200 text-2xl'><i className="fa-solid fa-house fa-fade" style={{color:"#B197FC"}}></i><b> Dream</b></span><span className='text-violet-400 text-2xl'><b>Home</b></span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link className='me-auto'>
          <form onSubmit={handleSubmit}  className='flex items-center'>
              <input className='rounded-start p-1 ps-2 bg-violet-200 focus:outline-none' type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search'/>
                      <button type='button' className='bg-violet-300 p-2 rounded-end'><FaSearch /></button>
          </form>
          </Nav.Link>
          <Nav className="ms-auto">
          <Nav.Link><Link to='/' className='text-decoration-none'><span className='text-violet-200 hover:underline'>Home</span></Link></Nav.Link>
          <Nav.Link><Link to='/about' className='text-decoration-none'><span className='text-violet-200 hover:underline'>About</span></Link></Nav.Link>
            <Nav.Link>
              <Link to='/profile'>
               { currentUser?(<img className='rounded-full h-8 w-8 object-cover' src={currentUser?.avatar} alt="profile" />):<button className='bg-violet-400 rounded px-2 py-1 hover:bg-violet-200 text-black'>Sign In</button>}
               </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header