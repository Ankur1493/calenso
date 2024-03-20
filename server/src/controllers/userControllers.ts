import { Request, Response } from "express"

export const userLogin = async (req: Request, res: Response) => {
  res.status(200).json({ message: "user logged in" })
}

export const userSignup = async (req: Request, res: Response) => {
  res.status(200).json({ message: "user signed up" })
}

export const getUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "here's your user" })
}

export const updateUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "user updated" })
}

export const deleteUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "user deleted" })
}
