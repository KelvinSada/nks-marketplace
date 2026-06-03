// import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SignUp from "./pages/SignUp.tsx";
import { AuthProvider } from "./AuthContext.tsx";

const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/signup",element:<SignUp/>}])

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  // </StrictMode>,
  ,
)
