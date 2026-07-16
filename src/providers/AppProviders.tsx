import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext.tsx";
import GlobalStorageProvider from "./GlobalStorageProvider.tsx";
import PostsProviders from "./PostsProviders.tsx";


interface AppProviderProps {
  children:ReactNode
}

const AppProviders = ({children}:AppProviderProps) => {

  return (
    <BrowserRouter>
      <PostsProviders>
        <GlobalStorageProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </GlobalStorageProvider>
      </PostsProviders>
    </BrowserRouter>
  )
}

export default AppProviders
