import { Router } from "express";
import { cretaeUser , loginUser} from "../contollers/user.contoller.js";

const router = Router();

router.route("/register").post(cretaeUser);
router.route("/login").post(loginUser);

export default router;