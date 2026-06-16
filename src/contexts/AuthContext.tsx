import { createContext,useState,useEffect, type ReactNode } from "react";
import type { AuthContextType, authErrorType, loginDetail, userDetail, userStorageDetail } from "../types/types";
import { uniqueString } from "../function/function";
import { useGlobalStorage } from "../hooks/hooks";


export const AuthContext = createContext<AuthContextType|undefined>(undefined)

interface AuthProviderProps {
  children:ReactNode,
}

export const AuthProvider=({children}:AuthProviderProps)=>{
  const {userStorage,addUser} = useGlobalStorage()
  const [user,setUser] = useState<userDetail|null>(null);
  const [loading,setLoading] = useState<boolean>(true)
  const [authError,setAuthError] = useState<authErrorType>({
    error:false,
    message:""
  })

  // const {GlobalStorage:{userStorage,setUserStorage}} = useContext(AppContext)

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
      setAuthError({
        error:true,
        message:"This user does not exist, sign up"
      })
    } else if (data.email === user?.email && data.password === user.password){
      try{
        await localStorage.setItem("user",JSON.stringify(data))
        setAuthError({
          error:false,
          message:"Login Successful"
        })
      } catch(error){
        setAuthError({
          error:true,
          message:"An error occured, try again later"
        })
      }
    } else if (data.email === user?.email && data.password !== user.password){
      setAuthError({
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
      if (data.email === user?.email){
        setAuthError({
          error:true,
          message:"This email already exists"
        })
      } else if (data.email !== user?.email){
        try{
          const person = userDataReady(data)
          addUser(person)

          // localStorage.setItem("user",JSON.stringify(data))
          setAuthError({
            error:false,
            message:"Signup successful"
          })
        } catch(err){
          setAuthError({
            error:true,
            message:`Error occured, try again later`
          })
        }
      }
    }

const userDataReady = (data:userDetail) => {

  let arrayId:number;
  
  arrayId = userStorage.length + 1 
  
  const specialId:string = uniqueString()
  
  const userStorageItem:userStorageDetail={
  id:arrayId,
  uniqueId:specialId,
  firstname:data.firstname,
  lastname:data.lastname,
  email:data.email,
  password:data.password
}
  return userStorageItem
}

// Saving User Storage to Local Storage
// useEffect(()=>{
//   const data = localStorage.getItem("UsersList")
//   if (data){
//     const info = JSON.parse(data)
//     console.log(info)
//     // setUserStorage(info)
//   } else {
//     throw new Error
//   }
// },[])


// useEffect(()=>{
//   console.log("rendered")
//   localStorage.setItem("UsersList",JSON.stringify(userStorage))
// },[userStorage])



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


