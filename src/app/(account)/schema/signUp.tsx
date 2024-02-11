'use client'

import * as yup from "yup";


export function useSchema(){

  
    const schema = yup.object().shape({
     userName: yup.string().min(4).max(8).required(),
      email: yup
        .string()
        .email("incorrect email")
        .required("please enter your email"),
      password: yup
        .string()
        .min(6)
        .max(15)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "Password must contain at least one lowercase letter, one uppercase letter, and one number"
        )
        .required("Please Enter You Password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), ""], "password must matched")
        .required("re-enter password"),
    });

  


  

  return [schema]
}
