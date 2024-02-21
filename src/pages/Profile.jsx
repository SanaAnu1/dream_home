import React, { useEffect, useRef, useState } from 'react'
import pr from '../assets/prr.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutUserFailure, signOutUserStart, signOutUserSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from '../Redux/user/userSlice'


function Profile() {
   
  const dispatch=useDispatch()
  const { currentUser,loading,error } = useSelector(state => state.user)
  const fileRef = useRef(null)
  const [file, setFile] = useState(undefined)
  const [filePerc, setFilePerc] = useState(0)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [updateSuccess,setUpdateSuccess]=useState(false)
  const [formData, setFormData] = useState({})
  const [showListingsError,setShowListingsError]=useState(false)
  const [userListings,setUserListings]=useState([])
  // allow read;
  // allow write:if
  // request.resource.size <2*1024*1024 &&
  // request.resource.contentType.matches('image/.*')
  useEffect(() => {
    if (file) {
      handleFileUpload(file)
    }
  }, [file])


  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress));
    },
      (error) => {
        setFileUploadError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      },
    )
  };

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      // console.log(currentUser._id);
      dispatch(updateUserStart())
      const res=await fetch(`/api/user/update/${currentUser._id}`,
      {method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),});
      const data=await res.json()
          // console.log(data);
          if(data.success===false){
            dispatch(updateUserFailure(data.message))
            return
          }
                    dispatch(updateUserSuccess(data))
                    setUpdateSuccess(true)
    } catch (error) {
      dispatch(updateUserFailure(error.message))
    }
  }
  const handleDeleteUser=async()=>{
      try {
        dispatch(deleteUserStart())
        const res=await fetch(`/api/user/delete/${currentUser._id}`,{
          method:'DELETE',
        })
        const data=await res.json()
        if(data.success===false){
          dispatch(deleteUserFailure(data.message))
          return
        }
        dispatch(deleteUserSuccess(data));
      } catch (error) {
        dispatch(deleteUserFailure(error.message))
      }
  }
  const handleSignOut=async()=>{
    try {
      dispatch(signOutUserStart())
      const res=await fetch('/api/auth/signout');
      const data=await res.json()
      if(data.success===false){
        dispatch(signOutUserFailure(data.message))
        return
      }
      dispatch(signOutUserSuccess(data))
    } catch (error) {
      dispatch(signOutUserFailure(error.message))
    }
  }
  const handleShowListings=async()=>{
    try {
      setShowListingsError(false)
      const res=await fetch(`/api/user/listings/${currentUser._id}`)
      const data=await res.json()
      if(data.success===false){
        setShowListingsError(true)
        return
      }
      setUserListings(data)
    } catch (error) {
      setShowListingsError(true)
    }
  }
  const handleListingDelete=async(listingId)=>{
        try {
          const res=await fetch(`/api/listing/delete/${listingId}`,
          {
            method:'DELETE'
          })
          const data=await res.json()
          if(data.success===false){
            console.log(data.message);
            return
          }
          setUserListings((prev)=>prev.filter((listing)=>listing._id!==listingId))
        } catch (error) {
          console.log(error.message);
        }
  }
  return (

    <div className='bg-slate-200 mb-0  mt-7 pt-5'>
      <div className='bg-slate-200  max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold'>Profile</h1>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <div className='mx-auto'>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" hidden ref={fileRef} accept='image/*' />
            <img onClick={() => fileRef.current.click()} width={'200px'} height={'200px'} className='img-fluid rounded-circle' src={formData?.avatar||currentUser?.avatar} alt="upload profile pic" />
            <p className='text-sm self-center text-center'>{fileUploadError ? (<span className='text-red-700'>Cant Upload Image <br /> Image must be less than 2mb</span>)  
            :filePerc > 0 && filePerc < 100 ?
              (<span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>) : 
              filePerc === 100 ? 
                (<span className='text-green-700'>Image successfully uploaded</span>): ("")
                }</p>
          </div>
          <input type="text" placeholder='username' id='username' className='border p-2 rounded-lg' defaultValue={currentUser?.username} onChange={handleChange}/>
          <input type="text" placeholder='email' id='email' className='border p-2 rounded-lg' defaultValue={currentUser?.email} onChange={handleChange}/>
          <input type="text" placeholder='password' id='password' className='border p-2 rounded-lg'defaultValue={currentUser?.password} onChange={handleChange}/>
          
          <button disabled={loading} className='bg-violet-500 text-white p-2 rounded hover:opacity-80'>{loading?'Loading..':'Update'}</button>
          <Link to={'/create-listing'} className='bg-violet-800 text-white rounded p-2 hover:opacity-80 text-center'><button >Create Listing</button></Link>
        </form>
        <p className='text-red-700 text-center'>{error?error:""}</p>
        <p className='text-green-700 text-center'>{updateSuccess?"User is update successfully":""}</p>
        <div className='d-flex justify-content-center align-items-center p-1'>
          <p onClick={handleDeleteUser}  className='text-red-700 cursor-pointer'>Delete Account</p>
          <p onClick={handleSignOut} className='text-red-700 ms-auto cursor-pointer'>Sign Out</p>
        </div>
        <div className='text-center pb-3'>
          <span type='button' onClick={handleShowListings} className='text-center text-green-700 p-3 font-semibold'>Show Listings</span>
          <p className='text-red-700 mt-3'>{showListingsError?'error showing listings':''}</p>
          {userListings && userListings.length>0 && 
          <div className='flex flex-col gap-3'>
            <h3 className='text-center pb-3'>Your Listings</h3>
            {userListings.map((listing)=>(
            <div key={listing._id} className='border p-2 flex justify-between items-center gap-3'>
              <Link to={`/listing/${listing._id}`}>
                <img className='h-16 w-16 object-contain' src={listing.imageUrls[0]} alt="listing cover" />
              </Link>
              <Link className='text-slate-700 font-semibold flex-1 hover:underline truncate' style={{textDecoration:'none'}} to={`/listing/${listing._id}`}>
                <p  className='truncate'>{listing.name}</p>
              </Link>
              <div>
                  <span onClick={()=>handleListingDelete(listing._id)} type='button'><i className="fa-solid fa-trash fa-lg me-3" style={{color: "#a20202"}}></i></span>
                  <Link to={`/update-listing/${listing._id}`}><span type='button'><i className="fa-solid fa-pen-to-square fa-lg" style={{color: "#27a305"}}></i></span></Link>
              </div>
            </div>
          ))}</div>
         }
        </div>
      </div>
    </div>
  )
}

export default Profile