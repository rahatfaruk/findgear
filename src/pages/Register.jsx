import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: {errors: formErr} } = useForm()
  const navigate = useNavigate()

  // create new user on form submit
  const onSubmit = async (data) => {
    // create user
    try {
      console.log(data);
      
      toast.success('user created successfully')
      navigate('/')
    } 
    catch (err) {
      toast.error(err.message)
      console.log(err.message);      
    }
    
  }

  return (
    <section className="flex-1 px-4 py-8 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-md mx-auto p-6 border rounded-md shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your name</span>
            <input type="text" {...register('name', {required:true})} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" placeholder="ali" />
            {formErr.name && <p className="text-sm text-red-500 mt-2">This field is required</p>}
          </label>

          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your email</span>
            <input type="email" {...register('email', {required:true})} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" placeholder="example@mail.com" />
            {formErr.email && <p className="text-sm text-red-500 mt-2">This field is required</p>}
          </label>

          <label className="block mb-4 relative">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your password</span>
            <input type={showPassword ? "text" : "password"} {...register('password', {required:true, pattern: /(?=.*[a-z])(?=.*[A-Z]).{6,}/ })} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-8 right-1.5 p-1 text-xl">
              {showPassword ? <Eye /> : <EyeSlash />}
            </button>
            {formErr.password?.type==='required' && <p className="text-sm text-red-500 mt-2">This field is required</p>}
            {formErr.password?.type==='pattern' && <p className="text-sm text-red-500 mt-2">Password length must be at least 6 characters; contains 1 uppercase, 1 lowercase letter</p>}
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-primary text-white w-full px-4 py-2 rounded-md hover:opacity-90">Register account</button>
          </div>
        </form>

        <p className="mt-4">Already have an account? <Link to="/login" className="text-primary hover:underline dark:text-teal-400">Login</Link></p>
      </div>
    </section>
  );
}

export default Register;