import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext.tsx";
import GlobalStorageProvider from "./GlobalStorageProvider.tsx";


interface AppProviderProps {
  children:ReactNode
}

const AppProviders = ({children}:AppProviderProps) => {

  return (
    <BrowserRouter>
      <GlobalStorageProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </GlobalStorageProvider>
    </BrowserRouter>
  )
}

export default AppProviders
