import React from 'react'
import Card from 'react-bootstrap/Card';
import v4 from '../assets/v4.jpg'

function Search() {
  return (
    <div className='pt-5 mt-3 bg-slate-200 flex flex-col md:flex-row'>
        <div className="p-7 border-slate-300 border-b-2 md:border-r-2 md:min-h-screen">
            <form className='flex flex-col gap-8'>
                <div className="flex items-center gap-2">
                    <label className='whitespace-nowrap'><b>Search Term:</b></label>
                    <input type="text" placeholder='Search..' id='searchTerm' className='border rounded-lg p-2 px-3 w-full' />
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <label><b>Type:</b></label>
                    <div className="flex gap-2">
                                <input type="checkbox" id='all' className='w-5' /> <span>Rent & Sale</span>
                            </div>

                    <div className="flex gap-2">
                                <input type="checkbox" id='sale' className='w-5' /> <span>Sale</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='rent' className='w-5' /> <span>Rent</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='Offer' className='w-5' /> <span>Offer</span>
                            </div>
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <label><b>Amenities:</b></label>
                    <div className="flex gap-2">
                                <input type="checkbox" id='parking' className='w-5' /> <span>Parking Spot</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='furnished' className='w-5' /> <span>Furnished</span>
                            </div>

                </div>
                <div className="flex items-center gap-2">
                    <label><b>Sort:</b></label>
                    <select id="sort_order" className='border rounded-lg p-2 px-3'>
                        <option>Price high to low</option>
                        <option>Price low to high</option>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>
                <button className='bg-slate-700 text-white px-3 p-2 rounded-lg hover:opacity-90'>SEARCH</button>
            </form>
        </div>
        <div className="p-3">
            <h3 className='text-3xl font-semibold border p-2 text-slate-700 '>Listing Results:</h3>
            <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={v4} />
        <Card.Body>
          <Card.Title>ABCD Villa</Card.Title>
          <Card.Text>
          <p><i className="fa-solid fa-location-dot fa-sm" style={{color: '#058703'}}></i><span className='ms-2'>Rfg JK Lane, Thrissur</span></p>
  
          This cozy 2-bedroom, 1-bathroom cottage is the perfect place to call home. Ideal for couples or small families.
          
          <p><b>2 bed   2 bathroom</b></p>
          </Card.Text>
        </Card.Body>
      </Card>

            </div>
        </div>
    </div>
  )
}

export default Search