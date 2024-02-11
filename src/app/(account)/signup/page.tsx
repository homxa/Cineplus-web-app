"use client";
import Footer from "@/app/footer/foot"
import React, { useState } from "react";
import { useSchema } from "../schema/signUp";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {createUserWithEmailAndPassword,sendEmailVerification} from 'firebase/auth'
import { auth } from "@/app/config/firebase";
import AlertTitle from '@mui/material/AlertTitle';
import { Alert } from '@mui/material';
import { useRouter } from "next/navigation";

interface Create{
 email: string,
 password: string,
 userName: string,
 confirmPassword: string


}
export default function SignupPage() {
  const [yes,setYes] = useState<boolean>(false)
  const route = useRouter()
const [aletUser,setAlertuser] = useState<boolean>(false)
 const  [schema] = useSchema()
 const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});
 
  const handleSubmitData = async(data:Create) => {
    
     try {
     const current =  await createUserWithEmailAndPassword(auth,data.email, data.password)
     try{
     
        await sendEmailVerification(current.user)

    
     }catch(err){
console.log('faild to send verificaion email',err)
     }
     localStorage.setItem('user',JSON.stringify(current.user.uid))
    route.push('/signup-sucsesfull')
    //  await new Promise((resolve) => {
    //   setTimeout(() => {
    //     setAlertuser((prev) => !prev);
    //    // Resolve the promise after the timeout
    //   }, 3000);
   // });
     
     } catch (error) {
      console.log('error while creating account',error)
     }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mb-2.5">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
     

          <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
            CinePulse
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSubmitData)}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${errors.userName?.message?'border-rose-600' : ''}`}

                placeholder="Enter your username"
                {...register("userName")}
              />
              {errors.userName?.message ? <p className={errors.userName?.message?'text-red-600': ''}>{errors.userName.message}</p> : ""}
            </div>
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

                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email?.message ? <p className={errors.userName?.message?'text-red-600': ''}>{errors.email.message}</p> : ""}
            </div>
            <div className="mb-4">
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
              {errors.password?.message ? <p className={errors.userName?.message?'text-red-600': ''}>{errors.password.message}</p> : ""}
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                  errors.confirmPassword?.message ? "border-rose-600" : ""
                }`}
                placeholder="Confirm your password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword?.message ? (
                <p className={errors.userName?.message?'text-red-600': ''}>{errors.confirmPassword.message}</p>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          disabled={yes}
          >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-gray-700">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 font-semibold hover:underline"
            >
              Log in here
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
