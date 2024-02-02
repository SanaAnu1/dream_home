import React from 'react'
import Bi from '../assets/secure-2.png'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'


function SignIn() {
  return (
    <div style={{width:"100%", height:'100vh'}} className='d-flex justify-content-center align-items-center pt-5'>
           <div className='container w-75 ' style={{textTransform:' none'}}>
           <Link to='/' className='text-decoration-none'><i className='fa-solid fa-arrow-left' style={{color:'#7E57C2'}}></i><span className='text-violet-400 hover:underline ms-2 font-semibold'>Back To Home</span></Link>
        <div className='shadow p-5  bg-violet-200'>
            <div className='row align-items-center bg-violet-200'> 
                <div className="col-lg-6">
                  <img height={'100%'} width={'100%'} src={Bi} alt="" />
                </div>
                <div className="col-lg-6">
                  <h5 className='mb-3'>
                       Sign in to your account
                  </h5>
                  <Form >
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                      <div>
                          <button className='btn btn-danger mb-2' style={{textTransform:' none'}}>Sign In</button>
                          <p>Don't have an account? <Link to={'/sign-up'} className='text-red-800'>Sign Up </Link> </p>
                      </div>  
                  </Form>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default SignIn