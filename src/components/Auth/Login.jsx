import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail ]=useState('')
  const [password,setPassword ]=useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("Email is", email)
    console.log("Password is", password)

    setEmail("")
    setPassword("")

  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-300 p-20 rounded-xl'>
          <form onSubmit={(e)=>{
            submitHandler(e)

            }
          }
          className='flex flex-col items-center justify-center' >
            <input value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }} 
              required
              className='border-2 border-green-300 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-300' type="email" placeholder='Enter your email'
            />
            <input value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              required
              className=' border-2 border-green-300 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-300 mt-3' type="password" placeholder='Enter your password' />
            <button  className=' border-none border-green-300 rounded-full py-3 px-5 text-xl  outline-none bg-blue-400 placeholder:text-white mt-3'>Login</button>


          </form>

        
        </div>
      
    </div>
  )
}

export default Login
