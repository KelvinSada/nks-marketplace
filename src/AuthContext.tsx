import { createContext,useState,useEffect, type ReactNode } from "react";
import type { AuthContextType, userDetail } from "./types";

export const AuthContext = createContext<AuthContextType|undefined>(undefined)

interface AuthProviderProps {
  children:ReactNode,
}

export const AuthProvider=({children}:AuthProviderProps)=>{
  const [user,setUser] = useState<userDetail|null>(null);
  const [loading,setLoading] = useState<boolean>(true)
  const [authError,setAuthError] = useState<boolean>(false)

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
    const mockUser = {firstname:"Novoh",lastname:"Sada",email:email,password:password}
    console.log(mockUser)
    localStorage.setItem("user",JSON.stringify(mockUser))
    setUser(mockUser)
  }

  //logout action
  const logout=()=>{
    localStorage.removeItem("user");
    setUser(null)
  }

  // Signup action
  const signup = async (data:userDetail) =>{
    try{
      localStorage.setItem("user",JSON.stringify(data))
      setAuthError(false)
    } catch{
      setAuthError(true)
    }
  }


  const value = {
    user,
    loading,
    login,
    logout,
    signup,
    authError,
    // isAuthenticated: !!user
  }



  return(
    <AuthContext.Provider value={value}>
      {!loading && children }
    </AuthContext.Provider>
  )
}


