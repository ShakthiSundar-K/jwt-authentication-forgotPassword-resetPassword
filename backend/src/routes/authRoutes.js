import express from "express";
import authController from "../controller/authController.js";
const router = express.Router();

router.post("/createUser", authController.createUser);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.post("/resetPassword", authController.resetPassword);

export default router;
