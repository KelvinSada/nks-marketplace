import { useState, type ReactNode } from 'react'
import { ItemsContext } from '../contexts/Context'
import type { apiDataType } from '../types/types'

interface ItemsProviderProps {
  children:ReactNode
}

const ItemsProviders = ({children}:ItemsProviderProps) => {
  const [itemsArray,setItemsArray] = useState<apiDataType[]>([])  // An array full of shopping items to be displayed

  const addItems = (data:apiDataType[]) =>{
    setItemsArray(data)
  }

  
  return (
    <ItemsContext.Provider value={{itemsArray,addItems}} >
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsProviders
