'use client'
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";import axios from "axios";
import Footer from "@/app/footer/foot";


interface Post{
  userId: number,
  id:  number,
  title: string,
  completed: boolean
}


export default function Home() {
  const{data,isPending,error} = useQuery({
   queryKey:['testing'],
   queryFn: async()=>{
   const {data}: {data: Post} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   console.log(data)
   return data 
   }
  })
  return (
    <>
    <div className="bg-cover bg-center bg-no-repeat min-h-screen relative" style={{backgroundImage: 'url(https://www.koimoi.com/wp-content/new-galleries/2021/12/five-disney-films-that-highlight-cultural-diversity-00001.jpg)'}}>
      {/* Navigation Bar */}
      <nav className=" bg-blue-500 shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold text-gray-200 cursor-pointer">CinePulse</h1>
          <div>
            <a href="/" className="text-gray-800 hover:text-blue-200 mr-4">Home</a>
            <a href="/" className="text-gray-800 hover:text-blue-200 mr-4">About Us</a>
            <a href="/" className="text-gray-800 hover:text-blue-200 mr-4">Contact Us</a>
            <a href="/signin" className="text-gray-800 hover:text-blue-200">Sign In</a>
          </div>
        </div>
      </nav>
      
      {/* Content */}
      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center">
        <div className="max-w-xl px-4 text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-lg mb-4">Welcome to <b className="text-blue-500">CinePulse</b></h1>
          <p className="text-lg mb-8">Discover and enjoy thousands of movies at your fingertips.</p>
          <p className="text-lg mb-8">Join CinePulse to unlock personalized movie recommendations, create watchlists, and connect with fellow movie enthusiasts.</p>
          <a href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg inline-block">Sign Up for Free</a>
        </div>
      </div>
    </div>


    </>
  );
}
