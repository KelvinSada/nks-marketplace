import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SignUp from "./pages/SignUp.tsx";
import { AuthProvider } from "./AuthContext.tsx";
import Login from "./pages/Login.tsx";
import User from "./pages/User.tsx";

const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/signup",element:<SignUp/>},
  {path:"/login",element:<Login/>},
  {path:"/user/:id",element:<User/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  </StrictMode>
  ,
)
