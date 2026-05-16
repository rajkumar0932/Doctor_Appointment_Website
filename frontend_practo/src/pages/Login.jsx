import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (

    <form
      onSubmit={onSubmitHandler}
      className='min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4'
    >

      <div className='w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 flex flex-col gap-5'>

        {/* Heading */}
        <div className='text-center'>

          <p className='text-3xl font-bold text-gray-800'>
            {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
          </p>

          <p className='text-sm text-gray-500 mt-2'>
            Please {state === 'Sign Up' ? 'sign up' : 'log in'} to continue
          </p>

        </div>

        {/* Full Name */}
        {
          state === 'Sign Up' &&

          <div className='w-full'>

            <p className='text-sm font-medium text-gray-700 mb-1'>
              Full Name
            </p>

            <input
              className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-all'
              type="text"
              placeholder='Enter your full name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

          </div>
        }

        {/* Email */}
        <div className='w-full'>

          <p className='text-sm font-medium text-gray-700 mb-1'>
            Email
          </p>

          <input
            className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-all'
            type="email"
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

        </div>

        {/* Password */}
        <div className='w-full'>

          <p className='text-sm font-medium text-gray-700 mb-1'>
            Password
          </p>

          <input
            className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-all'
            type="password"
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

        </div>

        {/* Button */}
        <button
          className='w-full bg-primary hover:opacity-90 text-white font-medium py-3 rounded-lg transition-all duration-300'
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle */}
        <p className='text-sm text-center text-gray-500'>

          {
            state === 'Sign Up'
              ? 'Already have an account?'
              : "Don't have an account?"
          }

          <span
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
            className='text-primary cursor-pointer ml-1 font-medium hover:underline'
          >
            {
              state === 'Sign Up'
                ? 'Login here'
                : 'Sign Up'
            }
          </span>

        </p>

      </div>

    </form>
  )
}

export default Login