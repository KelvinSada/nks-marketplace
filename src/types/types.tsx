// User signup detail type
export type userDetail = {
  firstname:string,
  lastname:string,
  email:string,
  password:string
}

export type loginDetail = {
  email:string,
  password:string
}

// Storing User Data into a main global array
export type userStorageDetail = {
  id:number | undefined,
  uniqueId:string | undefined,
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
  },
  GlobalStorage:{
    userStorage:userStorageDetail[],
    setUserStorage:React.Dispatch<React.SetStateAction<userStorageDetail[]>>,
  }
}

export type GlobalStorageContextType = {
    userStorage:userStorageDetail[],
    addUser: (data: userStorageDetail) => void;
  }

export type ItemsContextType = {
  itemsArray:apiDataType[],
  addItems:(data: apiDataType[]) => void;
}

export type  SelectedItemsContextType ={
  selectedCategory:string,
  selectItems: (data: string) => void
}

export type AuthContextType = {
  user: userDetail | null,
  login:  (data: loginDetail) => Promise<void>,
  logout:() => void,
  loading:boolean,
  signup: (data: userDetail) => Promise<void>,
  authError: authErrorType
}

export type authErrorType = {
    error:boolean,
    message:string
  }