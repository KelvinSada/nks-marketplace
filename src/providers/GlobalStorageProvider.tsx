import { useEffect,useState } from 'react';
import type { ReactNode } from 'react'
import { GlobalStorageContext } from '../contexts/Context';
import type { authMessageType, globalStorageDetail } from '../types/types';


interface GlobalStorageProviderType {
  children:ReactNode;
}

const GlobalStorageProvider = ({children}:GlobalStorageProviderType) => {
  const  [globalStorage,setGlobalStorage] = useState<globalStorageDetail[]>([])
    const [ authMessage,setAuthMessage] = useState<authMessageType>({
      error:false,
      message:""
    })

  const addUser = (data:globalStorageDetail)=>{
    setGlobalStorage((prev)=>[...prev,data])
  }

  // Getting data from the global Storage
  useEffect(() => {
    const loadInitialData = () => {
      const users = localStorage.getItem("global_storage");
      if (users) {
        setGlobalStorage(JSON.parse(users));
      }
    };
    loadInitialData();
  }, []);

  // Setting data to Local storage
  useEffect(() => {
    localStorage.setItem("global_storage", JSON.stringify(globalStorage));
  }, [globalStorage]);

  const value = {
    globalStorage,
    addUser,
    authMessage,
    setAuthMessage
  }

  return (
    <GlobalStorageContext.Provider value={value} >
      {children}
    </GlobalStorageContext.Provider>
  )
}

export default GlobalStorageProvider
