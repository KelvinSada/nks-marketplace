import { useState } from 'react';
import type { ReactNode } from 'react'
import { GlobalStorageContext } from '../contexts/Context';
import type { userStorageDetail } from '../types/types';


interface GlobalStorageProviderType {
  children:ReactNode;
}

const GlobalStorageProvider = ({children}:GlobalStorageProviderType) => {
  const  [userStorage,setUserStorage] = useState<userStorageDetail[]>([])

  const addUser = (data:userStorageDetail)=>{
    setUserStorage((prev)=>[...prev,data])
  }
  
  return (
    <GlobalStorageContext.Provider value={{userStorage,addUser}} >
      {children}
    </GlobalStorageContext.Provider>
  )
}

export default GlobalStorageProvider
