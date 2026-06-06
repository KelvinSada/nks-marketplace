import { createContext } from "react";
import type { AppContextType } from "./types";


export const AppContext = createContext<AppContextType>({
  SavedItemsArray:{
    itemsArray:[],
    setItemsArray:()=>{}
  },
  SelectedCategory:{
    selectedCategory:"men's clothing",
    setSelectedCategory:()=>{}
  },
  GlobalStorage:{
    userStorage:[],
    setUserStorage:()=>{}
  }
})