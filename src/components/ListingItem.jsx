import React from 'react'
import { Link } from 'react-router-dom'

function ListingItem({listing}) {
  return (
    <div className='bg-white border shadow-md hover:shadow-lg  transition-shadow overflow-hidden rounded-lg w-full sm:w-[340px]'>
        <Link to={`/listing/${listing._id}`} style={{textDecoration:'none'}}>
            <img src={listing.imageUrls[0]} alt="listing cover" className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105  ' />
            <div className='pt-1 px-3 flex flex-col gap-2 w-full'>
                <p className='text-slate-700 font-semibold text-lg truncate'>{listing.name}</p>
            </div>
            <div className="flex items-center gap-1">
            <p className='px-3 text-slate-500 text-sm truncate'><i className="fa-solid fa-location-dot me-2" style={{color: '#058703'}}></i>{listing.address}</p>
            </div>
        </Link>
    </div>
  )
}

export default ListingItem