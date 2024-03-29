import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import v4 from '../assets/v4.jpg'
import { useNavigate } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

function Search() {
    const navigate=useNavigate()
    const [sidebardata,setsidebardata]=useState({
        searchTerm:'',type:'all',parking:false,furnished:false,offer:false,sort:'createdAt',order:'desc'
    })
    const [loading,setLoading]=useState(false)
    const [listings,setListings]=useState([])

    useEffect(()=>{
        const urlParams=new URLSearchParams(location.search)
        const searchTermFromUrl=urlParams.get('searchTerm')
        const typeFromUrl=urlParams.get('type')
        const parkingFromUrl=urlParams.get('parking')
        const furnishedFromUrl=urlParams.get('furnished')
        const offerFromUrl=urlParams.get('offer')
        const sortFromUrl=urlParams.get('sort')
        const orderFromUrl=urlParams.get('order')

if(searchTermFromUrl||typeFromUrl||parkingFromUrl||furnishedFromUrl||offerFromUrl||sortFromUrl||orderFromUrl){
    setsidebardata({
        searchTerm:searchTermFromUrl||'',
        type:typeFromUrl||'all',
        parking:parkingFromUrl==='true'?true:false,
        furnished:furnishedFromUrl==='true'?true:false,
        offer:offerFromUrl==='true'?true:false,
        sort:sortFromUrl||'created_at',
        order:orderFromUrl||'desc'
    })
}
    const fetchListings=async()=>{
        setLoading(true)
        const searchQuery=urlParams.toString()
        const res=await fetch(`/api/listing/get?${searchQuery}`)
        const data=await res.json()
        setListings(data)
        setLoading(false)
    }
    fetchListings()
    },[location.search])
const handleChange=(e)=>{
    if(e.target.id==='all' || e.target.id==='rent' || e.target.id==='sale'){
        setsidebardata({...sidebardata,type:e.target.id})
    }
    if(e.target.id==='searchTerm'){
        setsidebardata({...sidebardata,searchTerm:e.target.value})
    }
    if(e.target.id==='parking' || e.target.id==='furnished' || e.target.id==='offer'){
        setsidebardata({...sidebardata,[e.target.id]:e.target.checked || e.target.checked==='true'?true:false})
    }
    if(e.target.id==='sort_order'){
        const sort=e.target.value.split('_')[0]||'created_at';
        const order=e.target.value.split('_')[1]||'desc'
        setsidebardata({...sidebardata,sort,order})
    }
}

const handleSubmit=(e)=>{
    e.preventDefault()
    const urlParams=new URLSearchParams()
    urlParams.set('searchTerm',sidebardata.searchTerm)
    urlParams.set('type',sidebardata.type)
    urlParams.set('parking',sidebardata.parking)
    urlParams.set('furnished',sidebardata.furnished)
    urlParams.set('offer',sidebardata.offer)
    urlParams.set('sort',sidebardata.sort)
    urlParams.set('order',sidebardata.order)
    const searchQuery=urlParams.toString()
    navigate(`/search?${searchQuery}`)
}

console.log(listings);
  return (
    <div className='pt-5 mt-3 bg-slate-200 flex flex-col md:flex-row'>
        <div className="p-7 border-slate-300 border-b-2 md:border-r-2 md:min-h-screen">
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                <div className="flex items-center gap-2">
                    <label className='whitespace-nowrap'><b>Search Term:</b></label>
                    <input value={sidebardata.searchTerm} onChange={handleChange} type="text" placeholder='Search..' id='searchTerm' className='border rounded-lg p-2 px-3 w-full' />
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <label><b>Type:</b></label>
                    <div className="flex gap-2">
                                <input onChange={handleChange} checked={sidebardata.type==='all'} type="checkbox" id='all' className='w-5' /> <span>Rent & Sale</span>
                            </div>

                    <div className="flex gap-2">
                                <input onChange={handleChange} checked={sidebardata.type==='sale'} type="checkbox" id='sale' className='w-5' /> <span>Sale</span>
                            </div>
                            <div className="flex gap-2">
                                <input onChange={handleChange} checked={sidebardata.type==='rent'} type="checkbox" id='rent' className='w-5' /> <span>Rent</span>
                            </div>
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <label><b>Amenities:</b></label>
                    <div className="flex gap-2">
                                <input onChange={handleChange} checked={sidebardata.parking} type="checkbox" id='parking' className='w-5' /> <span>Parking Spot</span>
                            </div>
                            <div className="flex gap-2">
                                <input onChange={handleChange} checked={sidebardata.furnished} type="checkbox" id='furnished' className='w-5' /> <span>Furnished</span>
                            </div>
                            <div className="flex gap-2">
                                <input onChange={handleChange} checked={sidebardata.offer} type="checkbox" id='offer' className='w-5' /> <span>Offer</span>
                            </div>
 

                </div>
                <div className="flex items-center gap-2">
                    <label><b>Sort:</b></label>
                    <select onChange={handleChange} defaultValue={'created_at_desc'} id="sort_order" className='border rounded-lg p-2 px-3'>
                        <option value={'regularPrice_desc'}>Price high to low</option>
                        <option value={'regularPrice_asc'}>Price low to high</option>
                        <option value={'createdAt_desc'}>Latest</option>
                        <option value={'createdAt_asc'}>Oldest</option>
                    </select>
                </div>
                <button className='bg-slate-700 text-white px-3 p-2 rounded-lg hover:opacity-90'>SEARCH</button>
            </form>
        </div>
        <div className="p-3 flex-1">
            <h3 className='text-3xl font-semibold border p-2 text-slate-700 '>Listing Results:</h3>
            <div className='p-6 flex flex-wrap gap-3'>
                {!loading&&listings.length===0&&
                <p className='text-xl text-red-700 font-semibold'>No Listing Found</p>}
                {loading&&(
                    <p className='text-slate-700 text-xl text-center w-full'>Loading...</p>
                )}
                {!loading&&listings&&listings.map((listing)=>(
                    <ListingItem key={listing._id} listing={listing}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Search