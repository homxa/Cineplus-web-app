'use client'

import * as yup from "yup";

export function useSchema2(){

  
  const schema = yup.object().shape({
  
    email: yup
      .string()
      .email("incorrect email")
      .required("please enter your email"),
    password: yup
      .string()
      .min(6)
      .max(10)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one number"
      )
      .required("Please Enter You Password"),
   
  });






return [schema]
}