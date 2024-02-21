import React, { useEffect, useState } from 'react'
import v1 from '../assets/v1.jpg'
import Carousel from 'react-bootstrap/Carousel';
import v3 from '../assets/v3.jpg'
import v2 from '../assets/v2.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import v4 from '../assets/v4.jpg'
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

function Home() {
  const [saleListings,setSaleListings]=useState([])
  const [rentListings,setRentListings]=useState([])
  useEffect(()=>{
    const fetchRentListings=async()=>{
      try {
        const res=await fetch('/api/listing/get?type=rent&limit=3')
        const data=await res.json()
        setRentListings(data)
        fetchSaleListing()
      } catch (error) {
        console.log(error);
      }
    }
    const fetchSaleListing=async()=>{
      try {
        const res=await fetch('/api/listing/get?type=sale&limit=3')
        const data=await res.json()
        setSaleListings(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchRentListings()
  },[])

  return (
    <div className='pt-5 mt-2'>
         <div id='carousal'>
           <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img style={{width:'100%',height:'500px'}} className='d-block' src={v1} alt="" />
            <Carousel.Caption className='text-start' >
             <div  id='a'>
                <h1  className='text-violet-300'>India's Best Site For <br /> Real Estate</h1>
                <p className='text-violet-200 text-2xl'><br />Dream<span className='text-violet-400'>Home</span> is a best real estate site for <b className='text-orange-400'>Buy, Rent</b> <br /> and <b className='text-orange-400'>Sale</b> residential & commercial property.</p>
             </div>
            </Carousel.Caption >
          </Carousel.Item>
          <Carousel.Item>
          <img style={{width:'100%',height:'500px'}} className='d-block' src={v2} alt="" />
            <Carousel.Caption className='text-start'>
              <div id='a'>
                <h1 className='text-violet-300'>We Promise You For <br /> a Better Future</h1>
                <p className='text-violet-200 text-2xl'><br />Still searching? Your perfect home is here. <br /> Low budget and quality assured.</p>
              
              </div></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img style={{width:'100%',height:'500px'}} className='d-block' src={v3} alt="" />
            <Carousel.Caption className='text-start'>
              <div id='a'>
                <h1 className='text-orange-800'><b>Dream Homes Are <br />Now Real</b></h1>
                <p className='text-orange-300 text-2xl'>
                  Praesent commodo cursus magna, vel <br />scelerisque   nisl consectetur. Lorem <br /> ipsum dolor sit.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
         </div>
         <div className='im flex justify-center items-center '>
         <h3 className='px-3 text-center ' style={{textDecoration:'none'}}>Let's find your DreamHome by clicking <Link to={'/search'}>here</Link></h3>
         </div>
         <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
            {saleListings&&saleListings.length>0&&(
              <div>
                <div className="my-3">
                  <h2 className="text-2xl font-semibold text-slate-600">
                    Recent Places For Sale
                  </h2>
                  <Link to={'/search?type=sale'} style={{textDecoration:'none'}} className='text-sm text-blue-700 hover:underline'>
                      Show more
                  </Link>
                </div>
                <div className='flex flex-wrap gap-4'>
                  {saleListings.map((listing)=>(
                    <ListingItem listing={listing} key={listing._id}></ListingItem>
                  ))}
                </div>
              </div>
             
            )}
          </div>

          <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
            {rentListings&&rentListings.length>0&&(
              <div>
                <div className="my-3">
                  <h2 className="text-2xl font-semibold text-slate-600">
                    Recent Places For Rent
                  </h2>
                  <Link to={'/search?type=rent'} style={{textDecoration:'none'}} className='text-sm text-blue-700 hover:underline'>
                      Show more
                  </Link>
                </div>
                <div className='flex flex-wrap gap-4'>
                  {rentListings.map((listing)=>(
                    <ListingItem listing={listing} key={listing._id}></ListingItem>
                  ))}
                </div>
              </div>
             
            )}
          </div>
    </div>
  )
}

export default Home