import { useAuth } from "../hooks/hooks"
import { useForm,type SubmitHandler } from "react-hook-form"
import type { loginDetail } from "../types/types"
import { Link } from "react-router-dom"


const Login = () => {
  const {register,formState:{errors},handleSubmit} = useForm<loginDetail>()
  const {authError,login} = useAuth()

  const onSubmit:SubmitHandler<loginDetail>= async (data:loginDetail)=>{
    try{
      await login(data)
    } catch(error){
      throw new Error("An error occured")
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 flex tra items-center justify-center p-6">
      {authError.error === true?<div className="text-red-500 absolute top-10 right-10">{authError.message}</div>:null}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Decorative top bar */}
        <div className="h-2 bg-linear-to-r from-emerald-200 to-teal-500"></div>

        <div className="p-8">
          {/* Brand / Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Login</h2>
            <p className="text-gray-500 mt-2">Welcome back to our retail marketplace today</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                placeholder="hello@example.com"
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-emerald-500'} bg-gray-50 focus:bg-white transition-all duration-200 outline-none focus:ring-2`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl border ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-emerald-500'} bg-gray-50 focus:bg-white transition-all duration-200 outline-none focus:ring-2`}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">Terms of Service</a> and <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-md"
            >
              Create account
            </button>

            {/* Sign in link */}
            <p className="text-center text-gray-600 text-sm">
              Do not have an account?{' '}
              <Link to={"/signup"} className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
