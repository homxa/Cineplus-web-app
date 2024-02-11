"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSchema2 } from "../schema/login";
import { auth } from "@/app/config/firebase";

interface User{
  password: string;
  email: string
}
export default function Login() {
  const [schema] = useSchema2();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitdata = async(data:User)=>{
// try {
//   await 
  
// } catch (error) {
  
// }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
            CinePulse
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Log In</h2>
          <form onSubmit={handleSubmit(submitdata)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${errors.email?.message?'border-rose-600' : ''}`}

                placeholder="Enter your username"
                {...register("email")}
              />
              {errors.email?.message ? <p className={errors.email?.message?'text-red-600': ''}>{errors.email?.message}</p> : ""}
            
              
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
               
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${errors.password?.message?'border-rose-600' : ''}`}

                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password?.message ? <p className={errors.password?.message?'text-red-600': ''}>{errors.password?.message}</p> : ""}
            
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-gray-700">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up here
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
