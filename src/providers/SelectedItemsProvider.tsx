import type { ReactNode } from 'react'
import { useState } from 'react'
import { selectedItemsContext } from '../contexts/Context'


interface SelectedItems {
  children:ReactNode,
}

const SelectedItemsProvider = ({children}:SelectedItems) => {
  const [selectedCategory,setSelectedCategory] = useState<string>("men's clothing")

  const selectItems = (data:string) =>{
    setSelectedCategory(data)
  }

  return (
    <selectedItemsContext.Provider value={{selectedCategory,selectItems}}>
      {children}
    </selectedItemsContext.Provider>
  )
}

export default SelectedItemsProvider
