import { useState, type ReactNode } from 'react';
import type { postItem, postsType } from '../types/types';
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

  const uploadPosts = (item:postItem)=>{
    const id = JSON.parse(uniqueString());

    setPosts({
      postId:id,
      postImageUrl:item.imgUrl,
      postTitle: item.name,
      description:item.description,
      amount:item.price,
    })
  }

  return (
    <postsContext.Provider value={{posts,uploadPosts}}>
      {children}
    </postsContext.Provider>
  )
}

export default PostsProviders
