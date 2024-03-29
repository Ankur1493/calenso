import express from "express";
import { userLogin, userSignup, getUser, updateUser, deleteUser, userLogout } from "../controllers/userControllers";
const router = express.Router();

// Registration
router.post("/login", userLogin);
router.post("/signup", userSignup);
router.post("/logout", userLogout);

// User Details
router.get("/:userId", getUser)
router.patch("/:userId", updateUser)
router.delete("/:userId", deleteUser)
export { router as userRoutes };
