import './App.css'
import { useState } from 'react'
import type { apiDataType } from './types'
import { AppContext } from './Context'
import DisplaySection from './components/displaySection'
import TopMenu from './components/TopMenu'

function  App () {
  const [itemsArray,setItemsArray] = useState<apiDataType[]>([])  // An array full of shopping items to be displayed
  const [selectedCategory,setSelectedCategory] = useState<string>("men's clothing") //store the categorySelected from the menu

  
  return (
     <AppContext.Provider value={{SavedItemsArray:{itemsArray,setItemsArray},
     SelectedCategory:{selectedCategory,setSelectedCategory}}}>
      <TopMenu/>
      <DisplaySection/>
    </AppContext.Provider>
  )
}

export default App
