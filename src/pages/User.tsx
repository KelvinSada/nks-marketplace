import { useEffect, useState, type ChangeEvent } from "react"
import { useParams } from "react-router-dom"
import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

const User = () => {
  const [displayImage,setDisplayImage] = useState<string|undefined>(undefined)
  const [editImage,setEditImage ] = useState({
    url:displayImage,
    removeBackground:false,
    changeBackgroundImage:false,
    backgroundcolor:""
  })

  const alterBackground = () =>{
    console.log("clicked")
    setDisplayImage(prev=>{
      if (prev !== undefined){
        const newString = prev.replace("/upload/","/upload/e_background_removal/")
        return newString
      }
    })
  }
  const cloudinaryName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  const cloudinaryApiKey = import.meta.env.VITE_MY_CLOUDINARY_API_KEY
  const cloudinaryApiSecret = import.meta.env.VITE_MY_CLOUDINARY_API_SECRET


  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image('sample');

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  const handlePictureUpload= async (event:ChangeEvent<HTMLInputElement>)=>{
    const imageDetail = event.target.files

    if (imageDetail){
      const imageName = imageDetail[0]
      const data = new FormData()
      data.append("file",imageName)
      data.append("upload_preset","nksMarketplace")
      data.append("cloud_name",cloudinaryName)

      try{
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`,{
          method:"POST",
          body:data,
        })

        const cloudinayResponse = await response.json();
        console.log(cloudinayResponse.url)
        setDisplayImage(cloudinayResponse.url)

      } catch(err){
        console.log("Error:",err)
      }
    }
  }
  return (
    <div>
      {/* <p>User Page</p> */}
      {/* <AdvancedImage cldImg={myImage} /> */}

      <div>
        <p>cloud name: {import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}</p>
        <label htmlFor="myImage">
          {/* <img src={cloudImage} alt=""/> */}
          <p>Drag and Drop or click to upload</p>
          <input id="myImage" type="file" onChange={(e:ChangeEvent<HTMLInputElement>)=>handlePictureUpload(e)}/>
        </label>

        <div className="m-4 p-4 border border-gray-200 rounded-lg shadow-md bg-white max-w-xs">
          <div className="flex flex-col items-center gap-3">
            <img 
              src={displayImage} 
              width={200} 
              alt="Product image" 
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="text-xl font-semibold text-gray-800">Price $300</p>
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm">
              Buy
            </button>
          </div>
        </div>

        {/* Adjust video settings */}
        <button onClick={alterBackground} className="bg-amber-600 m-4"> Take off background</button>
      </div>
    </div>
  )
}

export default User
