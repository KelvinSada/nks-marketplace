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

export type postsType = {
    postId: undefined | number;
    postImageUrl: string;
    postTitle: string;
    description: string;
    amount: undefined | number;
}
export  type postFormType = {
  itemName:string,
  itemPrice:number,
  itemDescription:string,
  itemUrl:string,
}

export type PostsContextType = {
  posts:postsType,
  uploadPosts:(name: string, price: number, description: string, imgUrl: string) => void,
}