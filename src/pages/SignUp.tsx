import React from 'react'
import Header from '../components/layout/Header'
import Input from '../components/Input';

const SignUp = () => {
  return (
    <div>
         <div className="bg-black h-full">
      <Header />
      <div className="flex flex-col gap-10 justify-center items-center py-32">
        <img
          src="https://shopkaro.today/wp-content/uploads/2022/08/shopkaro-logo.png"
          alt="logo"
          className="w-96 h-auto"
        />
        <div className="w-auto flex flex-col gap-4 bg-white/[0.05] p-10 rounded-lg">
            <div className='flex gap-5'>
            <Input label="First Name" classes="p-3 rounded-md" />
            <Input label="Last Name" classes="p-3 rounded-md" />
            </div>
          <Input label="Email" classes="p-3 rounded-md" />
          <Input label="Password" classes="p-3 rounded-md" />
          <Input label="Confirm Password" classes="p-3 rounded-md" />
          <p className="text-white">Forgot Password</p>
          <button className="bg-green-700 py-3 rounded-lg text-white text-xl font-bold">
            Sign Up
          </button>
          <p className="text-white text-xs">
            If you already have account.Please <span className='text-green-300 underline cursor-pointer'>Sign In</span>.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp