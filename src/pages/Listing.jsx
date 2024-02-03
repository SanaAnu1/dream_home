import React from 'react'
import v4 from '../assets/v4.jpg'
function Listing() {
  return (
    <div className='pt-5  mt-3'>
          <div><img style={{width:'100%',height:'500px'}} className='d-block w-100' src={v4} alt="" /></div>
         <div className='p-5'> 
            <h3>ABCD Villa - $ 530/month</h3>
            <p><i className="fa-solid fa-location-dot fa-sm" style={{color: '#058703'}}></i><span className='ms-2'>Rfg JK Lane, Thrissur</span></p>
            <div><button className='bg-red-700 text-white px-5 py-1 rounded'>For Rent</button> <button className='bg-green-700 text-white px-4 py-1 rounded ms-2'>$20 discount</button></div>
            <p><b>Description:</b> This cozy 2-bedroom, 1-bathroom cottage is the perfect place to call home. Nestled in the picturesque neighborhood of Willowbrook, you'll enjoy a spacious backyard, a bright and airy interior, and easy access to the local park. Ideal for couples or small families.</p>
            <p><i class="fa-solid fa-bed me-1" style={{color: '#058703'}}></i>2 bed  <span className='ms-4'><i class="fa-solid fa-bath" style={{color: '#058703'}}></i> 2 bath</span><span className='ms-4'><i class="fa-solid fa-chair" style={{color: '#058703'}}></i> furnished</span> </p>
            <button className='bg-slate-700 text-white rounded-md px-5 py-2 w-full mt-5'>Contact Owner</button>
         </div>
    </div>
  )
}

export default Listing