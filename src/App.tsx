import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Layout from './components/Layout'

function  App () {

  
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<Home/>} />
      </Route>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App

// import './App.css'
// import { useState } from 'react'
// import type { apiDataType,userStorageDetail } from './types/types'
// import { AppContext } from './context/Context'
// import DisplaySection from './components/common/DisplaySection'
// import TopMenu from './components/common/TopMenu'

// function  App () {
//   const [itemsArray,setItemsArray] = useState<apiDataType[]>([])  // An array full of shopping items to be displayed
//   const [selectedCategory,setSelectedCategory] = useState<string>("men's clothing") //store the categorySelected from the menu
//   const [userStorage,setUserStorage] = useState<userStorageDetail[]>([]) // Global user storage


  
//   return (
//      <AppContext.Provider value={{
//       SavedItemsArray:{itemsArray,setItemsArray},
//       SelectedCategory:{selectedCategory,setSelectedCategory},
//       GlobalStorage:{userStorage,setUserStorage},
//      }}>
//       <TopMenu/>
//       <DisplaySection/>
//     </AppContext.Provider>
//   )
// }

// export default App