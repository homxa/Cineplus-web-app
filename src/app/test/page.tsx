'use client'
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import React from 'react'
import { Button } from 'semantic-ui-react'


import axios from "axios";
interface Post{
  userId: number,
  id:  number,
  title: string,
  completed: boolean
}
export default function  Test() {
  const{data,isPending,error} = useQuery({
   queryKey:['testing'],
   queryFn: async()=>{
    
   const {data}: {data: Post} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   console.log(data)
   return data 
   }
  })
  if(error){
    return <h1 className="flex min-h-screen flex-col items-center justify-between p-24">{error.message}</h1>
  }
  if(isPending){
    return <h1 className="flex min-h-screen flex-col items-center justify-between p-24">loading</h1>
   
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
    <div><button className="ui primary button">Primary</button><button className="ui secondary button">Secondary</button></div>
{data?.title}

    </div>
    </main>
  );
}
