import { Router } from "express";
const router = Router();
import { getProfile } from "../controllers/user.controller";
import { verifyToken } from "../middleware/authJwt";

router.get("/profile", [verifyToken], getProfile);

export default router;
