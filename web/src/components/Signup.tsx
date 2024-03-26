import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSignupMutation } from "../slices/usersApiSlice"
import { setCredentials } from "../slices/authSlice"
import { toast } from "react-toastify"
// import { RootState } from "@reduxjs/toolkit/query"
import { RootState } from "../store"

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [signup, { isLoading }] = useSignupMutation();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [userInfo, navigate])

  const SubmitSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await signup({ username, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success(res.message);

    } catch (err) {
      toast.error(err?.data?.message || err?.error)
    }

  }


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white text-6xl font-secondHeading font-bold mt-10">Sign Up</div>
      <form className="flex flex-col py-6" onSubmit={SubmitSignup}>
        <label htmlFor="username" className="mt-6 block text-md text-mainText font-heading">
          Username
        </label>
        <input
          className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
          type="text"
          name="name"
          id='username'
          placeholder="Enter Userame"
          value={username}
          onChange={handleUsernameChange}
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
          value={email}
          onChange={handleEmailChange}
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
          value={password}
          onChange={handlePasswordChange}
        />{isLoading ? (
          <h1 className="text-white text-2xl">Loading</h1>
        ) : (
          <button type="submit" className="mt-6 px-4 py-2 rounded-md bg-mainText border border-gray-400 text-main text-md font-heading font-semibold hover:opacity-80">Sign Up</button>
        )}
      </form>
    </div>

  )
}

export default Signup
