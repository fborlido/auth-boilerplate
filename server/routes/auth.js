import express from "express";
import login from "../controllers/login.js";
import register from "../controllers/register.js";
import getUser from "../controllers/getUser.js";
import validateAuth from "../middleware/validateAuth.js";
import logout from "../controllers/logout.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.get("/user", [validateAuth], getUser);

export default router;
