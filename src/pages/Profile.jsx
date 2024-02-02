import React from 'react'
import pr from '../assets/prr.png'

function Profile() {
  return (
   
      <div className='bg-slate-200 mb-0  mt-7 pt-5'>
         <div className='bg-slate-200  max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold'>Profile</h1>
            <form className='flex flex-col gap-3'>
            <label className='mx-auto'>
                <input type="file" style={{display:'none'}} />
                <img width={'200px'} height={'200px'} className='img-fluid rounded-circle' src={pr} alt="upload profile pic" />
              </label>
              <input type="text" placeholder='username' className='border p-2 rounded-lg'/>
              <input type="text" placeholder='email' className='border p-2 rounded-lg'/>
              <input type="text" placeholder='password' className='border p-2 rounded-lg'/>
              <button className='bg-violet-500 text-white p-2 rounded hover:opacity-80'>Update</button>
              <button  className='bg-violet-800 text-white rounded p-2 hover:opacity-80'>Create Listing</button>
            </form>
            <div className='d-flex justify-content-center align-items-center p-1'>
              <p className='text-red-700'>Delete Account</p>
              <p className='text-red-700 ms-auto'>Sign Out</p>
            </div>
            <div className='text-center pb-3'>
              <span className='text-center text-green-700 p-3 font-semibold'>Show Listings</span>
            </div>
         </div>
      </div>
  )
}

export default Profile