import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { app } from '../firebase'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';


function UpdateListing(){
    const params=useParams()
    const {currentUser}=useSelector(state=>state.user)
    const navigate=useNavigate()
    const [files,setFiles]=useState([])
    const [formData,setFormData]=useState({name:"",description:"",address:"",regularPrice:50,discountPrice:0,bathrooms:1,bedrooms:1,furnished:false,parking:false,type:"rent",offer:false,imageUrls:[],userRef:""})
    const [imageUploadError,setImageUploadError]=useState(false)
    const [uploading,setUploading]=useState(false)
    const [error,setError]=useState(false)
    const [loading,setLoading]=useState(false)
    
    useEffect(()=>{
        const fetchListing=async()=>{
            const listingId=params.listingId
            const res=await fetch(`/api/listing/get/${listingId}`)
            const data=await res.json()
            if(data.success===false){
                console.log(data.message)
                return
            }
            setFormData(data)
        }
        fetchListing()
    },[])


    const handleImageSubmit=(e)=>{
        if(files.length>0 && files.length+formData.imageUrls.length<7 ){
            setUploading(true)
            setImageUploadError(false)
            const promises=[]

            for (let i=0;i<files.length;i++){
                promises.push(storeImage(files[i]))
            }
            Promise.all(promises).then((urls)=>{
                setFormData({...formData,imageUrls:formData.imageUrls.concat(urls)})
                setImageUploadError(false)
                setUploading(false)
            }).catch((err)=>{
                setImageUploadError('image upload failed!! (2mb max per image)')
                setUploading(false)
            })
        }else{
            setImageUploadError('You can only upload max 6 images')
            setUploading(false)
        }
    }

    const storeImage=async(file)=>{
        return new Promise((resolve,reject)=>{
            const storage=getStorage(app)
            const fileName=new Date().getTime()+file.name
            const storageRef=ref(storage,fileName)
            const uploadTask=uploadBytesResumable(storageRef,file)
            uploadTask.on("state_changed",
            (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
            },
            (error)=>{
                reject(error)
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                    resolve(downloadURL)
                })
            })
        })
    }
    const handleRemoveImage=(index)=>{
        setFormData({
            ...formData,
            imageUrls: formData.imageUrls.filter((_,i)=>i!==index),
        })
    }
    const handleChange=(e)=>{
        if(e.target.id==='sale'||e.target.id==='rent'){
            setFormData({
                ...formData,
                type:e.target.id
            })
        }
        if(e.target.id==='parking'||e.target.id==='furnished'||e.target.id==='offer'){
            setFormData({
                ...formData,
                [e.target.id]:e.target.checked
            })
        }
        if(e.target.type==='number'||e.target.type==='text'||e.target.type==='textarea'){
            setFormData({
                ...formData,
                [e.target.id]:e.target.value
            })
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            if(formData.imageUrls.length<1){
                return setError('you must upload atleat 1 image')
            }
            if(+formData.regularPrice<+formData.discountPrice){
                return setError('Discount price must be less than regular price')
            }
            setLoading(true)
            setError(false)
            const res=await fetch(`/api/listing/update/${params.listingId}`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                  },
                  body: JSON.stringify({
                    ...formData,
                userRef:currentUser._id
            }),
            })
            const data=await res.json()
            setLoading(false)
            if(data.success===false){
                setError(data.message)
            }
            toast.success("Listing created successfully")
            navigate(`/listing/${data._id}`)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }

    }
  return (
    <div className='bg-slate-100'>
        <main className='p-3 mt-5 max-w-4xl mx-auto bg-slate-100'>
            <h2 className='text-3xl text-center font-semibold my-7'>Update Listing</h2>
            <form className='flex flex-col sm:flex-row gap-4'>
                    <div className='flex flex-col gap-3 flex-1'>
                        <input onChange={handleChange} value={formData.name} type="text" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='5' required />
                        <textarea onChange={handleChange} value={formData.description} type="text" placeholder='Description' className='border p-3 rounded-lg' id='description' required />
                        <input onChange={handleChange} value={formData.address} type="text" placeholder='Address' className='border p-3 rounded-lg' id='address' required />
                         <div className="flex gap-6 flex-wrap">
                            <div className="flex gap-2">
                                <input type="checkbox" id='sale' className='w-5' onChange={handleChange} checked={formData.type==='sale'}/> <span>Sell</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='rent' className='w-5' onChange={handleChange} checked={formData.type==='rent'}/> <span>Rent</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='parking' className='w-5' onChange={handleChange} checked={formData.parking}/> <span>Parking Spot</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='furnished' className='w-5' onChange={handleChange} checked={formData.furnished}/> <span>Furnished</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id='offer' className='w-5' onChange={handleChange} checked={formData.offer}/> <span>Offer</span>
                            </div>
                         </div>
                         <div className='flex flex-wrap gap-6'>
                                <div className="flex items-center gap-2">
                                    <input onChange={handleChange} value={formData.bedrooms}  type="number" id='bedrooms' min='1' max='10' required className='p-2 border-gray-300 rounded-lg' />
                                    <p className='mt-2'>Bedroom</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input onChange={handleChange} value={formData.bathrooms}  type="number" id='bathrooms' min='1' max='10' required className='p-2 border-gray-300 rounded-lg' />
                                    <p className='mt-2'>Bathroom</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="number" onChange={handleChange} value={formData.regularPrice}  id='regularPrice' min='50' max='1000000' required className='p-2 border-gray-300 rounded-lg' />
                                    <div className="flex flex-col items-center"><span>Regular Price</span>
                                    <span className='text-sm'>($/month)</span></div>
                                </div>
                                {formData.offer&&(<div className="flex items-center gap-2">
                                    <input onChange={handleChange} value={formData.discountPrice}  type="number" id='discountPrice' min='0' max='1000000' required className='p-2 border-gray-300 rounded-lg' />
                                    <div className="flex flex-col items-center"><span>Discount Price</span>
                                    <span className='text-sm'>($/month)</span>
                                    </div>
                                    </div> )}
                                 
                                
                         </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-4">
                        <p className='font-semibold'>Images:
                        <span className='font-normal text-gray-700 ml-2'>The First image will be the cover (max:6)</span>
                        </p>
                        <div className="flex gap-4">
                            <input onChange={(e)=>setFiles(e.target.files)} className='p-3 border border-slate-600 rounded w-full' type="file" id='images' accept='image/*' multiple />
                            <div><button onClick={handleImageSubmit} type='button' className='p-3 border border-success   text-green-700 rounded hover:shadow-lg disabled:opacity-80'>{uploading?'Uploading...':'Upload'}</button></div>
                            
                        </div>
                        <p className='text-red-700 px-2'>{imageUploadError&&imageUploadError}</p>
                        
                        {formData.imageUrls.length>0 && formData.imageUrls.map((url,index)=>(
                            <div key={url} className='flex justify-between items-center p-2 border'> 
                               <img src={url} alt="listing image" className='w-20 h-20 object-contain rounded-lg' />
                               <span onClick={()=>handleRemoveImage(index)} type='button' className='hover:opacity-70'><i className="fa-solid fa-trash fa-xl pt-3" style={{color: "#b90404"}}></i></span>
                            </div>
                        ))}
                        <button onClick={handleSubmit} disabled={loading || uploading}  className='p-2 bg-slate-700 text-white rounded-lg hover:opacity-85'>{loading?'Updating...':'Update Listing'}</button>
                        {error&&<p className='text-red-700 text-sm'>{error}</p>}
                    </div>
            </form>
        </main>
        <ToastContainer autoClose={3000} theme='colored' />
    </div>
  )
}

export default UpdateListing