import express from "express";
import { authUser } from "../controllers/userController.js";
import router from "./productRoutes.js";

router.post("/login", authUser);

export default router;