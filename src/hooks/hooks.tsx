import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import type { AuthContextType } from "../types/types"
import { GlobalStorageContext, ItemsContext, postsContext, selectedItemsContext } from "../contexts/Context"

export const useAuth = ():AuthContextType =>{ 
  const context = useContext(AuthContext)
  if (!context){
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const useItems =() =>{
  const context = useContext(ItemsContext)
  if (context === undefined){
    throw new Error("useItems must be used within the ItemsProvider")
  }
  return context
}

export const useSelectedItems =()=>{
  const context = useContext(selectedItemsContext)
  if (context === undefined){
    throw new Error("useItems must be used within the ItemsProvider")
  }
  return context
}

export const useGlobalStorage=()=>{
  const context = useContext(GlobalStorageContext)
  if (context === undefined){
    throw new Error("useItems must be used within the ItemsProvider")
  }
  return context;
}

export const usePosts=()=>{
  const context = useContext(postsContext)
  if (context === undefined){
    throw new Error("useItems must be used within the ItemsProvider")
  }
  return context;
}