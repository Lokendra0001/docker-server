import express from "express";
const router = express.Router();
import indexController from "../controllers/index.controller.js";
import userRouter from "./user-router.js";

// Basic API Check
router.use("/user", userRouter);
router.get("/health", indexController.healthCheck);

export default router;
