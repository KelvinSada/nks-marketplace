// User signup detail type
export type userDetail = {
  firstname:string,
  lastname:string,
  email:string,
  password:string
}

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
  user: userDetail | null,
  login: (email: string, password: string) => Promise<void>,
  logout:() => void,
  loading:boolean,
  signup: (data: userDetail) => Promise<void>,
  authError:boolean,
}
