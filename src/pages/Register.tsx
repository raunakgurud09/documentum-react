import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import gradient from "../assets/blurred-colorful-background.jpg"


import { FaEye } from "react-icons/fa6";


export const Register = () => {


  const { register } = useAuth()
  const [visible, setVisible] = useState(false)

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleDataChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name]: e.target.value
    })
  }


  const handleRegister = async () => { await register(data) }




  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <div className="w-1/2 h-screen border">
        <div className='px-36 h-screen flex justify-center items-start gap-5 flex-col bg-dark '>
          <div className='flex flex-col item-start'>
            <h1 className="text-4xl flex-col font-bold">
              Get started
            </h1>
            <p className='text-xs font-medium text-white/80'>Create a new account</p>
          </div>

          {/* input for entering the username */}
          <div className='flex flex-col w-full space-y-2'>

            <div className="w-full space-y-1">
              <label className='text-sm'>Username</label>
              <input
                type='text'
                placeholder='your_name'
                value={data.username}
                className='block w-full h-10 rounded-md outline outline-[1px]   focus:ring-1   placeholder:text-sm   outline-zinc-400/30  px-5 '
                onChange={handleDataChange("username")}
              />
            </div>
            <div className="w-full space-y-1">
              <label className='text-sm'>Email</label>
              <input
                type='email'
                placeholder='you@exmample.com'
                value={data.email}
                className='block w-full h-10 rounded-md outline outline-[1px]   focus:ring-1   placeholder:text-sm   outline-zinc-400/30  px-5 '
                onChange={handleDataChange("email")}
              />
            </div>
            <div className="w-full relative">
              <label className='text-sm'>Password</label>
              <input
                type={visible ? 'text' : 'password'}
                placeholder='************'
                value={data.password}
                className='block w-full h-10 rounded-md outline outline-[1px]   focus:ring-1   placeholder:text-sm   outline-zinc-400/30  px-5 '
                onChange={handleDataChange("password")}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleRegister();
                  else return;
                }}
              />
              <FaEye onClick={() => { setVisible((prev) => !prev) }} className="hover:cursor-pointer absolute right-4 top-9" />
            </div>
            {/* Button to initiate the login process */}
          </div>
          <button
            className='rounded-md w-full px-8 py-2 bg-blue-600 font-semibold text-white'
            onClick={handleRegister}
          >
            Register
          </button>


          {/* Link to the registration page */}
          <div className='w-full flex flex-col  justify-center items-center'>
            <small className="">
              Already have an account{" "}
              <a className="text-primary hover:underline" href="/login">
                Login
              </a>
            </small>

            {/* divider */}
            <div id="or" className='text-sm'> OR </div>
          </div>

          <div className='w-full'>
            <button onClick={() => alert('working on it')} className='w-full py-3 px-6 rounded-md item-center bg-black text-white font-medium border border-white'>
              Google
            </button>
          </div>


        </div>
      </div>

      {/* star move animation */}
      <div className='w-1/2 h-screen'>
        {/* <div className='rotate-[300deg]   w-full h-40 bg-gradient-to-t from-blue-50 via-blue-500 to-blue-50 '></div> */}
        <img src={gradient} alt="gradient" className='w-full h-screen' />
      </div>
    </div>


  )
}
