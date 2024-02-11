'use client'
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
export function Provider({children}:{children:ReactNode}){
  const clients = new QueryClient()
  return(
    <QueryClientProvider client={clients}>
      {children}
    </QueryClientProvider>
  )
 

}