import React from 'react'

function Signup() {
  return (
<div className="flex flex-col items-center justify-center">
  <div className="text-white text-6xl font-secondHeading font-bold mt-10">Sign Up</div>
  <form className="flex flex-col py-6">
    <label htmlFor="username" className="mt-6 block text-md text-mainText font-heading">
    Username
    </label>
    <input
      className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
      type="text"
      name="name"
      id='username'
      placeholder="Enter Userame"
    />
      <label htmlFor="email" className="mt-6 block text-md font-heading text-mainText">
    Email
    </label>
    <input
      className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
      type="text"
      name="email"
      id='email'
      placeholder="abc@example.com"
    />
    <label htmlFor="password" className="mt-6 block text-md font-heading text-mainText">
  Password
</label>
    <input
      className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
      type="password"
      name="password"
      id='password'
      placeholder="***********"
    />
    <button className="mt-6 px-4 py-2 rounded-md bg-mainText border border-gray-400 text-main text-md font-heading font-semibold hover:opacity-80">Sign Up</button>
  </form>
</div>

  )
}

export default Signup