import { usePosts } from "../hooks/hooks"
import  {type SubmitHandler, useForm} from "react-hook-form"
import type { postItem } from "../types/types"
import { imageUpload } from "../function/function"


const User = () => {
  const { posts, setPosts, savePost } = usePosts()

  const { register, handleSubmit } = useForm<postItem>()


  //Saving the form info and sendin the image to cloudinary
  const onSubmit:SubmitHandler<postItem>= async (data)=>{

  //  Handling image upload to cloudinary
  const imgUrl = data.imgUrl[0];
  console.log(imgUrl)
  const response = await imageUpload(imgUrl)

  // Configurating the Posts
  data.imgUrl = response.url

  setPosts(data)
  }

  const alterBackground = () =>{
    const updatedPosts = {
      ...posts,
      name: "Kome sada",
      imgUrl:posts.imgUrl.replace("/upload/", "/upload/e_background_removal/")
    }
    setPosts(updatedPosts)
  }

  const handleSubmitItem =()=>{
    savePost(posts)
    setPosts({
      name: "",
      price: undefined,
      description: "",
      imgUrl: "",
    })
  }


  return (
    <div>
      <div>
        {/* Upload the Image */}
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 w-fit m-4 p-2">

          <div>
            <input {...register("name",{
              required:"Please enter your item name"
            })}
            placeholder="Name of Item"
            type="text"/>
          </div>

          <div>
            <input {...register("price",{
              required:"List the price of the item"
            })}
            placeholder="Price of Item"
            type="number"/>
          </div>

          <div>
            <input {...register("description",{
              required:"Let the user know more about the item"
            })}
            placeholder="About the Item"
            type="text"/>
          </div>

          <div>
            <input {...register("imgUrl",{
              required:"Let the user know more about the item"
            })}
            placeholder="Drag and Drop or click to upload"
            type="file"/>
          </div>

          <button className="bg-red-300 p-2">Submit</button>
        </form>

        {/* Display the uploaded Item */}
        {
          posts.name.length >0?
          <section>
            <div className="m-4 p-4 border border-gray-200 rounded-lg shadow-md bg-white max-w-xs">
            <div className="flex flex-col items-center gap-3">
              <div>
                <img 
                  src={posts.imgUrl} 
                  width={200} 
                  alt={posts.name} 
                  className="rounded-lg object-cover w-full h-auto"
                  />
                  <button onClick={alterBackground}>Remove background</button>
              </div>
              <p>{posts.name}</p>
              <p>{posts.description}</p>
              <p className="text-xl font-semibold text-gray-800">Price ${posts.price}</p>
            </div>

              <button onClick={handleSubmitItem} className="flex w-full justify-around mt-5 border-2 border-amber-400" >Submit</button>
            </div>
          </section>
        :null
        }

      </div>
    </div>
  )
}

export default User
