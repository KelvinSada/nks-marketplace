import { useState, type ReactNode } from 'react';
import type { postItem, savedPosts } from '../types/types';
import { postsContext } from '../contexts/Context';
import { uniqueString } from '../function/function';


interface PostsProviderProps {
  children:ReactNode;
}
const PostsProviders = ({children}:PostsProviderProps) => {
  const [ posts,setPosts ] = useState<postItem>({
    name:"",
    price:undefined,
    description:"", 
    imgUrl:""
  })  
  const [ itemsArray, setItemsArray ] = useState< savedPosts[] | []>([])


  const savePost = (userPost:postItem) =>{

    const uniqueNum = uniqueString()
    const postArrayNumber = itemsArray.length + 1


    const uploadObject:savedPosts = {
      ...userPost,
      id: postArrayNumber,
      uniqueKey: uniqueNum
    }

    setItemsArray((prev)=>[...prev,uploadObject])
  }

  return (
    <postsContext.Provider value={{posts,setPosts, itemsArray, savePost}}>
      {children}
    </postsContext.Provider>
  )
}

export default PostsProviders
