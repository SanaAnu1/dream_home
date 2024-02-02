import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='w-100'>
<Navbar expand="lg" className="bg-red-800 border-bottom p-2" fixed='top'>
      <Container>
        <Navbar.Brand><Link to='/' className='text-decoration-none'><span className='text-violet-200 text-2xl'><i className="fa-solid fa-house fa-fade" style={{color:"#B197FC"}}></i><b> Dream</b></span><span className='text-violet-400 text-2xl'><b>Home</b></span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link className='me-auto'><form className='flex items-center'>
              <input className='rounded-start p-1 ps-2 bg-violet-200 focus:outline-none' type="text" placeholder='Search'/>
              <div className='bg-violet-200 p-2 rounded-end '><FaSearch /></div>
            </form></Nav.Link>
          <Nav className="ms-auto">
          <Nav.Link><Link to='/' className='text-decoration-none'><span className='text-violet-200 hover:underline'>Home</span></Link></Nav.Link>
          <Nav.Link><Link to='/about' className='text-decoration-none'><span className='text-violet-200 hover:underline'>About</span></Link></Nav.Link>
            <Nav.Link><Link to='/sign-in'><button className='bg-violet-400 rounded px-2 py-1 hover:bg-violet-200 text-black'>Sign In</button></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header