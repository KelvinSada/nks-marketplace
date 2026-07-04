import { useState, type ReactNode } from 'react';
import type { postsType } from '../types/types';
import { postsContext } from '../contexts/Context';
import { uniqueString } from '../function/function';


interface PostsProviderProps {
  children:ReactNode;
}
const PostsProviders = ({children}:PostsProviderProps) => {
  const [ posts,setPosts ] = useState<postsType>({
    postId:undefined,
    postImageUrl:"",
    postTitle:"",
    description:"",
    amount:undefined,
  })  

  const uploadPosts = (name:string,price:number,description:string, imgUrl:string)=>{
    const id = JSON.parse(uniqueString());

    setPosts({
      postId:id,
      postImageUrl:imgUrl,
      postTitle:name,
      description:description,
      amount:price
    })
  }

  return (
    <postsContext.Provider value={{posts,uploadPosts}}>
      {children}
    </postsContext.Provider>
  )
}

export default PostsProviders
