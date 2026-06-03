import { createContext,useState,useEffect, type ReactNode } from "react";
import type { AuthContextType,User } from "./types";

export const AuthContext = createContext<AuthContextType|undefined>(undefined)

interface AuthProviderProps {
  children:ReactNode,
}

export const AuthProvider=({children}:AuthProviderProps)=>{
  const [user,setUser] = useState<User|null>(null);
  const [loading,setLoading] = useState<boolean>(true)

  //Check if user session exists on app load
  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    if (storedUser){
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  },[])

  //Login action
  const login = async  (email:string,password:string)=>{
    const mockUser = {id:"123",email:email,token:password}
    console.log(mockUser)
    localStorage.setItem("user",JSON.stringify(mockUser))
    setUser(mockUser)
  }

  //logout action
  const logout=()=>{
    localStorage.removeItem("user");
    setUser(null)
  }

  const value = {
    user,
    loading,
    login,
    logout,
    // isAuthenticated: !!user
  }



  return(
    <AuthContext.Provider value={value}>
      {!loading && children }
    </AuthContext.Provider>
  )
}


