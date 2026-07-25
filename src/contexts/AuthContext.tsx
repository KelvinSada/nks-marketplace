import { createContext,useState,useEffect, type ReactNode } from "react";
import type { AuthContextType, loginDetail, userDetail, globalStorageDetail } from "../types/types";
import { uniqueString } from "../function/function";
import { useGlobalStorage } from "../hooks/hooks";


export const AuthContext = createContext<AuthContextType|undefined>(undefined)

interface AuthProviderProps {
  children:ReactNode,
}

export const AuthProvider=({children}:AuthProviderProps)=>{
  const [user,setUser] = useState<userDetail|null>(null);
  const [loading,setLoading] = useState<boolean>(true)
  
  const {globalStorage,addUser,setAuthMessage} = useGlobalStorage()

  //Check if user session exists on app load
  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    if (storedUser){
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  },[])
  
  //Login action
  const login = async  (data:loginDetail)=>{
    if (data.email !== user?.email){
      setAuthMessage({
        error:true,
        message:"This user does not exist, sign up"
      })
    } else if (data.email === user?.email && data.password === user.password){
      try{
        await localStorage.setItem("user",JSON.stringify(data))
        setAuthMessage({
          error:false,
          message:"Login Successful"
        })
      } catch(error){
        setAuthMessage({
          error:true,
          message:"An error occured, try again later"
        })
      }
    } else if (data.email === user?.email && data.password !== user.password){
      setAuthMessage({
        error:true,
          message:"Email and password does not match"
        })
      }
    }
    
    //logout action
    const logout=()=>{
      localStorage.removeItem("user");
      setUser(null)
    }
    
    // Signup action
    const signup = async (data:userDetail) =>{
      console.log(data)
      console.log(globalStorage)

      const checkEmail = globalStorage.some(user => user.email === data.email)
      console.log(checkEmail)

      if (checkEmail){
        setAuthMessage({
          error:checkEmail,
          message:"This email already exists"
        })
      } else {
        try{
          const person = userDataReady(data)
          addUser(person)

          setAuthMessage({
            error:checkEmail,
            message:"Signup successful"
          })
        } catch(err){
          setAuthMessage({
            error:true,
            message:`Error occured, try again later`
          })
        }
      }
    }

const userDataReady = (data:userDetail) => {

  let arrayId:number;
  
  arrayId = globalStorage.length + 1 
  
  const specialId:string = uniqueString()
  
  const globalStorageItem:globalStorageDetail={
  id:arrayId,
  uniqueId:specialId,
  firstname:data.firstname,
  lastname:data.lastname,
  email:data.email,
  password:data.password
}
  return globalStorageItem
}



  const value = {
    user,
    loading,
    login,
    logout,
    signup,
    // isAuthenticated: !!user
  }



  return(
    <AuthContext.Provider value={value}>
      {!loading && children }
    </AuthContext.Provider>
  )
}


