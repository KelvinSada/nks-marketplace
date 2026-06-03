import './App.css'
import { useState, useEffect } from 'react'
import type { apiDataType } from './types'
import ComponentMenu from './components/ComponentMenu'
import { AppContext } from './Context'

function  App () {
  // const [data,setData] = useState<apiDataType>({   //A shopping Item
  //   "id": 0,
  //   "title": "",
  //   "price": 0,
  //   "description": "",
  //   "category": "",
  //   "image":"",
  //   "rating": {
  //   "rate": 0,
  //   "count": 0,
  //   }
  // })
  const [itemsArray,setItemsArray] = useState<apiDataType[]>([])  // An array full of shopping items to be displayed
  const [selectedCategory,setSelectedCategory] = useState<string>("men's clothing") //store the categorySelected from the menu

  useEffect(function (){
    getData()
  },[])

   async function getData(){
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok)  throw new Error(`HTTP error: ${response.status}`)          
      const info:apiDataType[] = await  response.json();
      await setItemsArray(info)
    } catch (error){
      console.log( error)
    }
   }
 
  return (
     <AppContext.Provider value={{SavedItemsArray:{itemsArray,setItemsArray},
     SelectedCategory:{selectedCategory,setSelectedCategory}}}>
      <section>
        <ComponentMenu data={itemsArray}/>
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
    </AppContext.Provider>
  )
}

export default App


// itemsArray?itemsArray.map((item:apiDataType)=>{
//               item.category===selectedCategory?
//               return(
//                 <div key={item.id} className='bg-pink-200 p-6 border-8 flex flex-col gap-2'>
//                   <img src={item.image} alt={item.description}/>
//                   <p className='text-2xl font-bold '>{item.title}</p>
//                   <p className='text-red-500 text-2xl font-bold'>Price {item.price}</p>
//                   <p className='font-bold'>ratings: {item.rating.rate} count:{item.rating.count}</p>
//                 </div>
//               // )
//             }):<p>Nothing to show here</p>