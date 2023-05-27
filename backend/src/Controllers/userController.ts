import { Request, Response, NextFunction } from "express";

const getUser = async (req: Request, res:Response, next: NextFunction) => {
    console.log("hello from getUser")
}

export { getUser }