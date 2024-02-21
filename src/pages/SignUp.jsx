import React, { useState } from 'react'
import Bi from '../assets/secure-2.png'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Oathh from '../components/Oathh';

function SignUp() {
  const navigate=useNavigate()
  // const {loading,error}=useSelector((state)=>state.users )
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)

const [formData,setFormData]=useState({username:"",email:"",password:""})
const handleChange=(e)=>{
  setFormData({
    ...formData,[e.target.id]:e.target.value
  })
}

    const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const res=await fetch('/api/auth/signup',
                {method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(formData),
          }
  )
          const data=await res.json()
          if(data.success===false){
            toast.info("Already existing User... Please Login!!")
            // setError()
            setLoading(false)
            return
          }
          setError(null)
          setLoading(false)
            navigate("/sign-in")

    } catch (error) {
      setLoading(false)
      console.log(data);

    }

}
  return (
    <div style={{width:"100%",marginTop:'40px',marginBottom:'40px'}} className='d-flex justify-content-center align-items-center pt-5'>
           <div className='container w-75 ' style={{textTransform:' none'}}>
           <Link to='/' className='text-decoration-none'><i className='fa-solid fa-arrow-left' style={{color:'#7E57C2'}}></i><span className='text-violet-400 hover:underline ms-2 font-semibold'>Back To Home</span></Link>
        <div className='shadow p-5  bg-violet-200'>
            <div className='row align-items-center bg-violet-200'> 
                <div className="col-lg-6">
                  <img height={'100%'} width={'100%'} src={Bi} alt="" />
                </div>
                <div className="col-lg-6">
                  <h5>
                    Sign Up to your account
                  </h5>
                  <Form onSubmit={handleSubmit}>
                    
                      <Form.Group className="mb-3" >
                                <Form.Control type="text" placeholder="Enter Name" id='username' onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                                <Form.Control type="email" placeholder="Enter email" id='email'  onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                                <Form.Control type="password" placeholder="Password" id='password' onChange={handleChange}/>
                        </Form.Group>
                      <div>
                          <button disabled={loading} className='btn btn-danger mb-2 w-100' style={{textTransform:' none'}} >{loading?'Loading...':'Sign Up'}</button>
                         <Oathh></Oathh>
                          <p>Already have account? Click here to <Link to={'/sign-in'} className='text-red-800'>Sign In</Link> </p>
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

export default SignUp