import { Application } from "express";
import userRouter from "./userRouter";

const initializeRouter = ( app: Application ) => {
    app.use("/api/v1/user", userRouter)
}

export default initializeRouter