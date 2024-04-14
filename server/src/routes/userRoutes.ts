import express from "express";
import { userLogin, userSignup, getUser, updateUser, deleteUser, userLogout } from "../controllers/userControllers";
import { authenticate } from "../middlewares/authenticate";
const router = express.Router();

// Registration
router.post("/login", userLogin);
router.post("/signup", userSignup);
router.post("/logout", authenticate, userLogout);

// User Details
router.get("/:username/:meetingId", getUser)
router.patch("/:userId", updateUser)
router.delete("/:userId", deleteUser)
export { router as userRoutes };
