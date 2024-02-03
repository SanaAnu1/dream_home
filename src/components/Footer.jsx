import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
     <div className='d-flex justify-content-center align-items-center flex-column text-light p-4 py-5 mt-0 bg-slate-900'>
    <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
      <div style={{width:'400px'}} className='website'>
        <h4 className='text-violet-200'><Link to='/' className='text-decoration-none'><span className='text-violet-200 text-2xl'><i className="fa-solid fa-house" style={{color:"#B197FC"}}></i><b> Dream</b></span><span className='text-violet-400 text-2xl'><b>Home</b></span></Link></h4>
        <h6 className='text-violet-200'>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
        <h6 className='text-violet-200'>Code licensed Luminar, docs CC BY 3.0.</h6>
        <p className='text-violet-200'>Currently v1.0.0</p>
      </div>
      <div className='links d-flex flex-column'>
          <h4 className='text-violet-200'>Links</h4>
          <Link to={'/'} className='text-violet-400 text-decoration-none'>Home</Link>
          <Link to={'/about'} className='text-violet-400 text-decoration-none'>About</Link>
          <Link to={'/profile'} className='text-violet-400 text-decoration-none'>Profile</Link>
      </div>
      <div className='guides d-flex flex-column '>
          <h4 className='text-violet-200'>Guides</h4>
          <Link to={'https://getbootstrap.com/'} className='text-violet-400 text-decoration-none'>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} className='text-violet-400 text-decoration-none'>React Bootstrap</Link>
          <Link to={'https://react-bootstrap.github.io/'} className='text-violet-400 text-decoration-none'>Routing</Link>
      </div>
      <div className='contact d-flex flex-column flex-wrap'>
          <h4 className='text-violet-200'>Contact Us</h4>
          <div className='d-flex'>
                <input type="text" className='form-control' placeholder='Enter your mail'/>
                <button className='btn btn-danger ms-3'><i className='fa-solid fa-arrow-right fa-beat'></i></button>
          </div>
          <div className='icons mt-3 d-flex justify-content-between fs-5 '>
                <Link to={'https://getbootstrap.com/'} className='text-violet-400 text-decoration-none'><i className='fa-brands fa-linkedin-in'></i></Link>
                <Link to={'https://react-bootstrap.github.io/'} className='text-violet-400 text-decoration-none'><i className='fa-brands fa-facebook'></i></Link>
                <Link to={'https://getbootstrap.com/'} className='text-violet-400 text-decoration-none'><i className='fa-brands fa-twitter'></i></Link>
                <Link to={'https://getbootstrap.com/'} className='text-violet-400 text-decoration-none'><i className='fa-brands fa-tiktok'></i></Link>
                <Link to={'https://getbootstrap.com/'} className='text-violet-400 text-decoration-none'><i className='fa-solid fa-envelope'></i></Link>
                <Link to={'https://getbootstrap.com/'} className='text-violet-400 text-decoration-none'><i className='fa-brands fa-github'></i></Link>

          </div>
      </div>
    </div>
    <div className=' pt-4 text-violet-200 text-decoration-none'>Copyright @ 2024  <i className="fa-solid fa-house" style={{color:"#B197FC"}}></i> Dream<span className='text-violet-400'>Home</span>. Built with React.</div>
  </div>
  )
}

export default Footer