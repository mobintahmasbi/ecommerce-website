import { Router } from "express";
import { getUser } from "../Controllers/userController";

const userRouter: Router = Router()
userRouter.get("/", getUser)

export default userRouter