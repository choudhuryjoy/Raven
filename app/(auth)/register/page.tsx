"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';

import { registerSchema } from '@/lib/types'
import { z } from "zod";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";
import { registerAction } from "@/actions/register";
import { useState, useTransition } from "react";
import { signInGithHub } from "@/lib/signInWithGithub";
import { signInGoogle } from "@/lib/signInWithGoogle";


type schema = z.infer<typeof registerSchema>

const page = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<schema>({ resolver: zodResolver(registerSchema) })
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");


  const onSubmit: SubmitHandler<schema> = (data) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      registerAction(data)
        .then(val => {
          setError(val?.error);
          setSuccess(val?.success);
        })

    });

  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto lg:py-0">
      <div
        onClick={() => {
          router.push('/')
        }}

        className="cursor-pointer flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-20 h-20 mr-2" src="/logo.png" alt="logo" />
        Raven
      </div>
      <div className="mb-10 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Register
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input {...register("email")}
                type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
              {errors.email &&
                <div className="flex items-center text-sm text-red-800" role="alert">
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">{errors.email.message}!</span>
                  </div>
                </div>
              }

            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input {...register("name")}
                name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ravi Kumar" />
              {errors.name &&
                <div className="flex items-center text-sm text-red-800" role="alert">
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">{errors.name.message}!</span>
                  </div>
                </div>
              }

            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input {...register("password")}
                type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.password &&
                <div className="flex items-center text-sm text-red-800" role="alert">
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">{errors.password.message}!</span>
                  </div>
                </div>
              }
            </div>
            <div>
              <label htmlFor="userType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select User Type</label>
              <select {...register("userType")}
                name="userType" id="userType" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>

              {errors.userType &&
                <div className="flex items-center text-sm text-red-800" role="alert">
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">{errors.userType.message}!</span>
                  </div>
                </div>
              }
            </div>




            {/* Success / Error element */}

            <FormError msg={error} />
            <FormSuccess msg={success} />



            <button disabled={isPending} type="submit" className="flex items-center justify-center w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative">
              {isPending ?
                <img className=" m-auto h-5 w-5" src="loading.gif" alt="Loading" />
                : "Register"}
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <span onClick={() => { router.push('/login') }} className="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500">Log in</span>
            </p>
          </form>
          <div className="flex items-center mt-6 text-gray-400">
            <hr className="flex-grow border-gray-400" />
            <p className="mx-4 text-sm">OR</p>
            <hr className="flex-grow border-gray-400" />
          </div>
          <div className="flex justify-around mt-6">

            <button
              onClick={async () => { await signInGithHub() }}
              type="button" className="w-full text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
              </svg>
              Github
            </button>
            <button
              onClick={async () => { await signInGoogle() }}
            
            type="button" className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
              </svg>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page