import { useEffect } from 'react'
import type { apiDataType } from '../../types/types'
import { useItems,useSelectedItems } from '../../hooks/hooks'


const DisplaySection = () => {

  const {itemsArray,addItems} = useItems()
  const {selectedCategory}= useSelectedItems()

  useEffect(function (){
    getData()
  },[itemsArray])

   async function getData(){
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok)  throw new Error(`HTTP error: ${response.status}`)          
      const info:apiDataType[] = await  response.json();
      addItems(info)
    } catch (error){
    }
   }
 

  return (
      <section>
        <div className=' flex flex-col gap-10'>
          {
            itemsArray?itemsArray.map((item:apiDataType)=>{
              if (item.category === selectedCategory){
                return(
                  <div key={item.id} className='bg-pink-200 p-6 border-8 flex flex-col gap-2'>
                    <img src={item.image} alt={item.description}/>
                    <p className='text-2xl font-bold '>{item.title}</p>
                    <p className='text-red-500 text-2xl font-bold'>Price {item.price}</p>
                    <p className='font-bold'>ratings: {item.rating.rate} count:{item.rating.count}</p>
                  </div>
                )
              }
            }):<p>Nothing to show here</p>
          }
        </div>
      </section>
  )
}

export default DisplaySection
