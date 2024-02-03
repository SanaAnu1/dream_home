import React from 'react'

function CreateListing() {
  return (
    <div className='bg-slate-100'>
        <main className='p-3 mt-5 max-w-4xl mx-auto bg-slate-100'>
            <h2 className='text-3xl text-center font-semibold my-7'>Create a Listing</h2>
            <form className='flex flex-col sm:flex-row gap-4'>
                    <div className='flex flex-col gap-3 flex-1'>
                        <input type="text" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='5' required />
                        <textarea type="text" placeholder='Description' className='border p-3 rounded-lg' id='description' required />
                        <input type="text" placeholder='Address' className='border p-3 rounded-lg' id='address' required />
                         <div className="flex gap-6 flex-wrap">
                            <div className="flex gap-2">
                                <input type="checkbox" id='sale' className='w-5' /> <span>Sell</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='rent' className='w-5' /> <span>Rent</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='parking' className='w-5' /> <span>Parking Spot</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='furnished' className='w-5' /> <span>Furnished</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='Offer' className='w-5' /> <span>Offer</span>
                            </div>
                         </div>
                         <div className='flex flex-wrap gap-6'>
                                <div className="flex items-center gap-2">
                                    <input type="number" id='bedrooms' min='1' max='10' required className='p-2 border-gray-300 rounded-lg' />
                                    <p className='mt-2'>Bedroom</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="number" id='baths' min='1' max='10' required className='p-2 border-gray-300 rounded-lg' />
                                    <p className='mt-2'>Bathroom</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="number" id='regular' min='1' max='10' required className='p-2 border-gray-300 rounded-lg' />
                                    <div className="flex flex-col items-center"><span>Regular Price</span>
                                    <span className='text-sm'>($/month)</span></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="number" id='discount' min='1' max='10' required className='p-2 border-gray-300 rounded-lg' />
                                    <div className="flex flex-col items-center"><span>Discount Price</span>
                                    <span className='text-sm'>($/month)</span>
                                    </div>  
                                </div>
                         </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-4">
                        <p className='font-semibold'>Images:
                        <span className='font-normal text-gray-700 ml-2'>The First image will be the cover (max:6)</span>
                        </p>
                        <div className="flex gap-4">
                            <input className='p-3 border border-slate-600 rounded w-full' type="file" id='images' accept='image/*' multiple />
                            <div><button type='btn' className='p-3 border border-success   text-green-700 rounded hover:shadow-lg disabled:opacity-80'>Upload</button></div>
                        </div>
                        <button className='p-2 bg-slate-700 text-white rounded-lg hover:opacity-85'>Create Listing</button>
                    </div>
            </form>
        </main>
    </div>
  )
}

export default CreateListing