import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router()

router.get('/', userController.getPatitoName)

export { router }