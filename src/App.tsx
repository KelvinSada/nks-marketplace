import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Layout from './components/Layout'
import User from './pages/User'
import NotFound from './pages/NotFound'

function  App () {

  
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>} />
      </Route>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App

// import './App.css'
// import { useState } from 'react'
// import type { apiDataType,globalStorageDetail } from './types/types'
// import { AppContext } from './context/Context'
// import DisplaySection from './components/common/DisplaySection'
// import TopMenu from './components/common/TopMenu'

// function  App () {
//   const [itemsArray,setItemsArray] = useState<apiDataType[]>([])  // An array full of shopping items to be displayed
//   const [selectedCategory,setSelectedCategory] = useState<string>("men's clothing") //store the categorySelected from the menu
//   const [globalStorage,setglobalStorage] = useState<globalStorageDetail[]>([]) // Global user storage


  
//   return (
//      <AppContext.Provider value={{
//       SavedItemsArray:{itemsArray,setItemsArray},
//       SelectedCategory:{selectedCategory,setSelectedCategory},
//       GlobalStorage:{globalStorage,setglobalStorage},
//      }}>
//       <TopMenu/>
//       <DisplaySection/>
//     </AppContext.Provider>
//   )
// }

// export default App