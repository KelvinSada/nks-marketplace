import type { apiDataType } from "../types/types"

// Creating a unique random string
export const uniqueString = ():string =>{
  const uniqueCode = Math.floor(Math.random() * 10000000)
  const uniqueString = JSON.stringify(uniqueCode)
  return uniqueString
}

// Fetching Items from the fake store API
export async function getData(){
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok)  throw new Error(`HTTP error: ${response.status}`)          
    const info:apiDataType[] = await  response.json();
    return info
  } catch (error){
    console.log( error)
  }
 }

//  Exporting pictures to Cloudinary
 export const imageUpload = async (imageUrl:string)=>{
  
  // cloudinary Name
  const cloudinaryName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

    const data = new FormData()
    data.append("file",imageUrl)
    data.append("upload_preset","nksMarketplace")
    data.append("cloud_name",cloudinaryName)
    try{
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`,{
        method:"POST",
        body:data,
      })
      const cloudinayResponse = await response.json();
      return cloudinayResponse
    } catch(err){
      return (`Error: ${err}`)
    }
}
