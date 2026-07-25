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
export type globalStorageDetail = {
  id:number | undefined,
  uniqueId:string | undefined,
  firstname:string,
  lastname:string,
  email:string,
  password:string
}

export type GlobalStorageContextType = {
    globalStorage:globalStorageDetail[],
    addUser: (data: globalStorageDetail) => void,
    authMessage:authMessageType,
    setAuthMessage:React.Dispatch<React.SetStateAction<authMessageType>>
  }


export type AuthContextType = {
  user: userDetail | null,
  login:  (data: loginDetail) => Promise<void>,
  logout:() => void,
  loading:boolean,
  signup: (data: userDetail) => Promise<void>,
}

export type authMessageType = {
    error:boolean,
    message:string
  }

export type postsType = {
    id: undefined | number;
} & postItem

export type PostsContextType = {
  posts:postItem,
  setPosts: React.Dispatch<React.SetStateAction<postItem>>,
  itemsArray: [] | savedPosts[],
  savePost: (userPost: postItem) => void
}

export type postItem = {
  name:string,
  price:number | undefined,
  description:string, 
  imgUrl:string
}

export type savedPosts = {
  id: number,
  uniqueKey : string
} & postItem