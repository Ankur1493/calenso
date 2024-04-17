import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSignupMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { RootState } from "../store";
import { IsConnected } from "../slices/isClickedSlice";
import { z } from "zod";
import { ErrorResponse } from "../interfaces/interfaces";

function Signup() {
  const localName = useParams().username;
  const [username, setUsername] = useState(localName || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupSchema = z.object({
    username: z
      .string()
      .min(5, { message: "username must be longer than 4 characters" })
      .regex(/^[a-zA-Z0-9]+$/, {
        message: "Username must contain only alphabets and numbers",
      }),
    email: z.string().email({ message: "invalid email address" }),
    password: z.string().min(4, {
      message: "password must be equal or longer than 3 characters",
    }),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [signup, { isLoading }] = useSignupMutation();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/home/event-types");
    }
  }, [userInfo, navigate]);

  const SubmitSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signupSchema.parse({
        username,
        email,
        password,
      });
      try {
        const res = await signup({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        dispatch(IsConnected());
        navigate("/home/event-types");
        toast.success(res.message);
      } catch (err) {
        const errorResponse = err as ErrorResponse;
        toast.error(errorResponse.data?.message || errorResponse.error);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white text-6xl font-secondHeading font-bold mt-10">
        Sign Up
      </div>
      <form className="flex flex-col py-6" onSubmit={SubmitSignup}>
        <label
          htmlFor="username"
          className="mt-6 block text-md text-mainText font-heading"
        >
          Username
        </label>
        <input
          className="px-4 py-2 w-64 rounded bg-transparent border border-gray-400"
          type="text"
          name="name"
          id="username"
          placeholder="Enter Userame"
          value={username}
          onChange={handleUsernameChange}
        />
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
          placeholder="abc@example.com"
          value={email}
          onChange={handleEmailChange}
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
          placeholder="***********"
          value={password}
          onChange={handlePasswordChange}
        />
        {isLoading ? (
          <h1 className="text-white text-2xl">Loading</h1>
        ) : (
          <button
            type="submit"
            className="mt-6 px-4 py-2 rounded-md bg-mainText border border-gray-400 text-main text-md font-heading font-semibold hover:opacity-80"
          >
            Sign Up
          </button>
        )}
      </form>
    </div>
  );
}

export default Signup;
