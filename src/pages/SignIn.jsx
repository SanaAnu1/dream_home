import React, { useState } from 'react'
import Bi from '../assets/secure-2.png'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { signInStart,signInSuccess,signInFailure } from '../Redux/user/userSlice'
import Oathh from '../components/Oathh'


function SignIn() {
  const dispatch=useDispatch()
  const [formData,setFormData]=useState({})
  const {loading,error}=useSelector((state)=>state.user )
  const navigate=useNavigate()
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      dispatch(signInStart())
            const res=await fetch('/api/auth/signin',
                {method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(formData),
          }
  )
          const data=await res.json()
          console.log(data);
          if(data.success===false){
            dispatch(signInFailure(data.message))
            toast.warning(data.message)
            // setError()
            return
          }
                    dispatch(signInSuccess(data))
            navigate("/")

    } catch (error) {
           dispatch(signInFailure(error.message))

    }

}

  return (
    <div style={{width:"100%",marginTop:'30px',marginBottom:'30px'}} className='d-flex justify-content-center align-items-center pt-5'>
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
                  <Form onSubmit={handleSubmit}>
                    
                        <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Enter email" id='email' onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Password" id='password' onChange={handleChange} />
                        </Form.Group>
                      <div>
                          <button disabled={loading} className='btn btn-danger mb-2 w-100' style={{textTransform:' none'}}>{loading?'Loading...':'Sign In'}</button>
                          <Oathh></Oathh>
                          <p>Don't have an account? <Link to={'/sign-up'} className='text-red-800'>Sign Up </Link> </p>
                      </div>  
                  </Form>
                </div>
            </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored' />

    </div>
  )
}

export default SignIn