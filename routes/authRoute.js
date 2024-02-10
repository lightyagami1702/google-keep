import express from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";
import { requiredSign } from "../middleware/authMiddleware.js";
//router object
const router = express.Router();
//register
router.post("/register", registerController);
//login
router.post("/login", loginController);
export default router;
