import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center">
  <div className="text-white mt-10 text-6xl font-bold font-secondHeading">Log In</div>
  <form className="flex flex-col py-6">
  <label htmlFor="email" className="mt-6 block text-md font-heading text-mainText">
  Email
</label>
    <input
      className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
      type="text"
      name="email"
      id='email'
      placeholder="Enter your email"
    />
    <label htmlFor="password" className="mt-6 block text-md font-heading text-mainText">
  Password
</label>
    <input
      className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
      type="password"
      name="password"
      id='password'
      placeholder="********"
    />
      <button className="mt-8 px-4 py-2 rounded-md text-main bg-mainText border border-gray-400 text-md font-heading font-semibold hover:opacity-80">Login</button>
  </form>
</div>

  )
}

export default Login