import React, { useEffect, useState } from 'react'
import v4 from '../assets/v4.jpg'
import { useParams } from 'react-router-dom'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle'
import { useSelector } from 'react-redux'
import Contact from '../components/Contact'


function Listing() {
  const { currentUser} = useSelector(state => state.user)
  SwiperCore.use([Navigation])
  const [listing,setListing]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const [contact,setContact]=useState(false)
  const params=useParams()


useEffect(()=>{
    const fetchListing=async()=>{
      try {
        setLoading(true)
        const res=await fetch(`/api/listing/get/${params.listingId}`)
        const data=await res.json()
        if(data.success===false){
          setError(true)
          setLoading(false)
          return
        }
        setListing(data)
        setLoading(false)
        setError(false)
        } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchListing()
},[params.listingId])
  return (
    <div className='pt-5  mt-3'>
      {loading&& <p className='text-center p-2 text-2xl'>Loading..</p>}
      {error&& <p className='text-center p-2 text-2xl'>Please Sign In to view more details!</p>}
      {listing && !loading && !error && (   
         <>
              <Swiper navigation>
                {listing?.imageUrls.map((url)=>(
                  <SwiperSlide key={url}>
                     <div style={{width:'100%',height:'500px',background:`url(${url}) center no-repeat`,backgroundSize:'cover'}}></div> 
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='p-5'> 
              <h3>{listing?.name} - $ {listing?.type=='rent'?`${listing?.regularPrice}/month`:`${listing?.regularPrice}`}</h3>
            <p><i className="fa-solid fa-location-dot fa-sm" style={{color: '#058703'}}></i><span className='ms-2'>{listing?.address}</span></p>
            <div className='flex gap-3'><button className='bg-red-700 text-white px-2 py-1 rounded'>For {listing?.type}</button> 
            <button className='bg-green-700 text-white px-2 py-1 rounded ms-2'>{listing?.offer?'':""}${listing?.discountPrice} discount</button></div>
            <p><b>Description:</b> {listing?.description}</p>
            <div className='flex gap-3 items-center whitespace-nowrap flex-wrap'><i class="fa-solid fa-bed me-1" style={{color: '#058703'}}></i>{listing?.bedrooms>1?`${listing?.bedrooms} beds`:`${listing?.bedrooms} bed`} 
             <span ><i class="fa-solid fa-bath" style={{color: '#058703'}}></i> {listing?.bathrooms>1?`${listing?.bathrooms} baths`:`${listing?.bathrooms} bath`}</span>
             <span ><i class="fa-solid fa-chair" style={{color: '#058703'}}></i>{listing?.furnished?' furnished':'Not furnished'}</span>
             <span ><i class="fa-solid fa-square-parking" style={{color: '#058703'}}></i>{listing?.parking?'Parking':'No Parking'}</span>
              </div>
             {currentUser && listing.userRef !==currentUser._id && !contact &&(
            <button onClick={()=>setContact(true)} className='bg-slate-700 text-white rounded-md px-5 py-2 w-full mt-5 hover:opacity-85'>Contact Owner</button>
            )}
           {contact&& <Contact listing={listing}/>}
            
         </div>
        </>
          )}
         
    </div>
  )
}
export default Listing