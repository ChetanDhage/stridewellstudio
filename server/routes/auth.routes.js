import { Router } from "express";
const router = Router();
import { signup, signin, signout } from "../controllers/auth.controller";
import { checkDuplicateEmail, checkRolesExisted } from "../middleware/verifySignup";

router.post(
  "/register",
  [checkDuplicateEmail, checkRolesExisted],
  signup
);

router.post("/login", signin);
router.post("/logout", signout);

export default router;
