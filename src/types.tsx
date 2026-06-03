export type apiDataType = {
  "id": number,
  "title": string,
  "price": number,
  "description": string,
  "category": string,
  "image":string,
  "rating": {
    "rate": number,
    "count": number
  }
}

export type AppContextType={
  SavedItemsArray:{
    itemsArray:apiDataType[],
    setItemsArray:React.Dispatch<React.SetStateAction<apiDataType[]>>
},
  SelectedCategory:{
     selectedCategory:string,
     setSelectedCategory:React.Dispatch<React.SetStateAction<string>>
  }
}

export type AuthContextType = {
  user: User | null,
  login: (email: string, password: string) => Promise<void>,
  logout:() => void,
  loading:boolean,
}

export type User = {
  id:string,
  email:string,
  token:string
}