import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Contact({listing}) {
    const [owner,setOwner]=useState(null)
    const [message,setMessage]=useState('')

    const onChange=(e)=>{
        setMessage(e.target.value)
    }

    useEffect(()=>{
        const fetchOwner=async()=>{
            try {
                const res=await fetch(`/api/user/${listing.userRef}`)
                const data=await res.json()
                setOwner(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchOwner()
    },[listing.userRef])
  return (
    <>
        {owner&&(
        <div>
            <h5 className='mt-4 font-semibold text-slate-800'>Contact <span>{owner.username}</span> for <span>{listing.name}</span></h5>
            <textarea className='w-full border p-2 px-3 rounded-lg mb-3' placeholder='Enter your message here...' name="message" id="message" rows="2" value={message} onChange={onChange}></textarea>
            <Link className='bg-slate-700 text-white p-2 text-center rounded-lg hover:opacity-90' style={{textDecoration:'none',width:'100%'}} to={`mailto:${owner.email}?subject=Regarding ${listing.name}&body=${message}`}><button className='w-100' type='button'>Send Message</button></Link>
        </div>
        )}
    </>
  )
}

export default Contact