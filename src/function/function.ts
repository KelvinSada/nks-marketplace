// Creating a unique random string
export const uniqueString = () =>{
  const uniqueCode = Math.floor(Math.random() * 10000000)
  const uniqueString = JSON.stringify(uniqueCode)
  return uniqueString
}

