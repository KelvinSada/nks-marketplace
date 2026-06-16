import type { apiDataType } from "../types/types"

// Creating a unique random string
export const uniqueString = () =>{
  const uniqueCode = Math.floor(Math.random() * 10000000)
  const uniqueString = JSON.stringify(uniqueCode)
  return uniqueString
}

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
