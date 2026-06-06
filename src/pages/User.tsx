import { useEffect } from "react"
import { useParams } from "react-router-dom"

const User = () => {
const {id} = useParams()
console.log(id)

useEffect(()=>{
  fetchUser()
})

const fetchUser = async () =>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  console.log(data)

}
  return (
    <div>
      <p>User Page</p>
    </div>
  )
}

export default User
