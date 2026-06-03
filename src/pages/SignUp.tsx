import { useForm, type SubmitHandler } from 'react-hook-form'
import { useAuth } from '../components/hooks'
import type { AuthContextType } from '../types'

type userFormDetail = {
  // username:string,
  email:string,
  password:string
}

const SignUp = () => {
  const { register,handleSubmit} = useForm<userFormDetail>();
  const { login } = useAuth()
  

  const  onSubmit:SubmitHandler<userFormDetail> = async (data:userFormDetail)=>{
    const email = data.email
    const password = data.password

    await login(email,password)
    
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* username */}
        {/* <input {...register("username")} placeholder='Username' type="text"/> */}
        {/* email */}
        <input {...register("email")} placeholder="Email" type="email"/>
        {/* password */}
        <input {...register("password")} placeholder="Password" type="password" />
      </div>

      {/* Form submit button */}
      <button>
        Submit
      </button>
    </form>
  )
}

export default SignUp
