import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { IsConnected } from "../slices/isClickedSlice";
import { z } from "zod";
import { ErrorResponse } from "../interfaces/interfaces";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(4, { message: "Password must be 4 or more characters long" }),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/home/event-types");
    }
  }, [userInfo, navigate]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      loginSchema.parse({
        email,
        password,
      });

      try {
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        dispatch(IsConnected());
        navigate("/home/event-types");
        toast.success(res.message);
      } catch (err) {
        const errorResponse = err as ErrorResponse;
        toast.error(errorResponse.data?.message || errorResponse.error);
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-white mt-10 text-6xl font-bold font-secondHeading">
        Log In
      </div>
      <form className="flex flex-col py-6" onSubmit={submitLogin}>
        <label
          htmlFor="email"
          className="mt-6 block text-md font-heading text-mainText"
        >
          Email
        </label>
        <input
          className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <label
          htmlFor="password"
          className="mt-6 block text-md font-heading text-mainText"
        >
          Password
        </label>
        <input
          className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="********"
        />
        {isLoading ? (
          <h1 className="text-white text-2xl">Loading</h1>
        ) : (
          <button
            type="submit"
            className="mt-8 px-4 py-2 rounded-md text-main bg-mainText border border-gray-400 text-md font-heading font-semibold hover:opacity-80"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
